import NebPay from '../utils/nebpay';
import config from '../config';
import { Neb, HttpRequest } from 'nebulas';

const nebPay = new NebPay();
const env = process.env.env;

const neb = new Neb();
neb.setRequest(new HttpRequest(config[env]['contact_host']))
const cry = "n1zgzRFoweYNkvhmEY7vcWJuYDjVYXVcwro";
const CryptoJS = require("crypto-js");

const cvtFriend = (friend) => {
    const {
        title,
        nick,
        sex,
        age,
        tel,
        wechat,
        address,
        profession,
        hobby,
        pic1,
        pic2,
        pic3,
        description,
        price,
        createTime,
        paidCount,
        fondCount,
        status,
        friendId,
    } = friend;
    return {
        title,
        nick,
        sex,
        age,
        tel: CryptoJS.AES.decrypt(tel, cry).toString(CryptoJS.enc.Utf8),
        wechat: CryptoJS.AES.decrypt(wechat, cry).toString(CryptoJS.enc.Utf8),
        address,
        profession,
        hobby,
        pic1,
        pic2,
        pic3,
        description,
        price,
        createTime,
        paidCount,
        fondCount,
        friendId,
        ifPaid: status === 0 || status === 1,
    };
}


export const postFriend = (title,
                          nick,
                          sex,
                          age,
                          tel,
                          wechat,
                          address,
                          profession,
                          hobby,
                          pic1,
                          pic2,
                          pic3,
                          description,
                          price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'saveFriend',
            JSON.stringify([
                title,
                nick,
                sex,
                age,
                CryptoJS.AES.encrypt(tel, cry).toString(),
                CryptoJS.AES.encrypt(wechat, cry).toString(),
                address,
                profession,
                hobby,
                pic1,
                pic2,
                pic3,
                description,
                price,
                null]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const checkFriend = (friendId, price) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], price, 'checkFriend',
            JSON.stringify([friendId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
            });
    });
}

export const fondFriend = (friendId) => {
    return new Promise((resolve) => {
        nebPay.call(config[env]['contract_address'], 0, 'fondFriend',
            JSON.stringify([friendId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    if (res.txhash) {
                        resolve(res);
                    }
                }
        });
    });
}

export const getFriend = (friendId) => {
    return new Promise((resolve) => {
        nebPay.simulateCall(config[env]['contract_address'], 0, 'getFriend',
            JSON.stringify([friendId]), {
                qrcode: {
                    showQRCode: false
                },
                listener: (res) => {
                    resolve({
                        friend: cvtFriend(JSON.parse(res.result)),
                    });
                }
        });
    });
}

export const getFriendList = (curPage = 1, sex) => {
    const perPage = 100;

    return new Promise((resolve) => {
        neb.api.call({
            from: config[env]['contract_address'],
            to: config[env]['contract_address'],
            value: 0,
            contract: {
                function: 'getFriendList',
                args: JSON.stringify([perPage, (curPage - 1) * perPage, sex]),
            },
            gasPrice: 1000000,
            gasLimit: 2000000,
        })
            .then(res => {
                return resolve({
                    list: JSON.parse(res.result).map(item => (
                        cvtFriend(item)
                    )),
                });
            })
    });
}

