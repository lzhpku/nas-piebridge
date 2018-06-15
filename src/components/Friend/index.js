import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea, Card, Image, Label, Form, Checkbox, Button, Icon } from 'semantic-ui-react';
import './style.css';
import defaultAvatar from '../../images/default.jpg';

class Friend extends Component {

    handleChange = (type) => (e1, e2) => {
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
            fondCount,
            price,
        } = this.props;
        this.props.onChange({
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
            fondCount,
            price,
            [type]: e1.target.value || e2.value,
        });
        console.log(this.props.ifPaid);
    }

    render() {
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
            fondCount,
        } = this.props;
        return (
            <div
                style={{
                    maxWidth: '900px',
                    margin: '40px auto',
                }}
                className="c-Friend"
            >

                <Segment
                    clearing
                    style={{
                        backgroundColor: '#fff',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '20px',
                            }}
                        >
                            <Input
                                placeholder="想个吸引眼球的标题吧"
                                transparent
                                size="large"
                                style={{
                                    width: '70%',
                                }}
                                value={title}
                                disabled={this.props.type === 'read'}
                                input={<input
                                    style={{
                                        textAlign: 'left',
                                        fontSize: '28px',
                                        color: '#333',
                                        width: '100%',
                                    }}
                                />}
                                actionPosition="left"
                                onChange={this.handleChange('title')}
                            />

                            <div
                                style={{
                                    display: this.props.type == 'read' ? 'inline-flex' : 'none',
                                }}
                            >
                                <Button
                                    as='div'
                                    labelPosition='right'
                                >
                                    <Button
                                        onClick={this.props.onLike}
                                        color='pink'
                                        style={{
                                            backgroundColor: '#f798b4',
                                        }}
                                    >
                                        <Icon name='heart'/>
                                        喜欢
                                    </Button>
                                    <Label
                                        as='a'
                                        basic
                                        pointing='left'
                                        style={{
                                            color: '#f798b4',
                                            borderColor: '#f798b4',
                                        }}
                                    >
                                        {fondCount}
                                    </Label>
                                </Button>
                            </div>
                        </div>


                        <div
                            style={{
                                width: '100%',
                                display: this.props.type == 'read' && !(this.props.pic1 == '' && this.props.pic2 == '' && this.props.pic3 == '') ? 'block' : 'none',
                            }}
                        >
                            <Card.Group
                                itemsPerRow={3}
                                style={{
                                    padding: '40px',
                                }}
                            >
                                <Card
                                    style={{
                                        marginTop: '16px',
                                    }}
                                    href={pic1 == "" ? defaultAvatar : pic1}
                                >
                                    <Image src={pic1 == "" ? defaultAvatar : pic1}/>
                                </Card>
                                <Card
                                    style={{
                                        marginTop: '16px',
                                    }}
                                    href={pic2 == "" ? defaultAvatar : pic2}
                                >
                                    <Image src={pic2 == "" ? defaultAvatar : pic2}/>
                                </Card>
                                <Card
                                    style={{
                                        marginTop: '16px',
                                    }}
                                    href={pic3 == "" ? defaultAvatar : pic3}
                                >
                                    <Image src={pic3 == "" ? defaultAvatar : pic3}/>
                                </Card>
                            </Card.Group>
                        </div>

                        <div
                            style={{
                                display: !this.props.ifPaid && this.props.type === 'read' ? 'block' : 'none',
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                color='twitter'
                                style={{
                                    borderRadius: '0',
                                    backgroundColor: '#f798b4',
                                    width: '50%',
                                }}
                                onClick={this.props.onPay}
                            >
                                <Icon name='expeditedssl'/>
                                支付{this.props.price}NAS查看TA的联系方式
                            </Button>
                        </div>

                        <Input
                            placeholder="梅长苏/霓凰"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            value={nick}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('nick')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                昵称：
                            </Label>
                            <input style={{textAlign: 'left', width: '100%'}}/>
                        </Input>

                        <Form
                            style={{
                                width: '100%',
                                marginTop: '10px',
                            }}
                        >
                            <Form.Field
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    fontWeight: 700
                                }}
                            >
                                性别：
                                <Checkbox
                                    radio
                                    label='男'
                                    name='checkbox'
                                    value='male'
                                    checked={sex === 'male'}
                                    onChange={this.handleChange('sex')}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Checkbox
                                    radio
                                    label='女'
                                    name='checkbox'
                                    value='female'
                                    checked={sex === 'female'}
                                    onChange={this.handleChange('sex')}
                                />
                            </Form.Field>
                        </Form>

                        <Input
                            placeholder="25岁"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: '12px',
                            }}
                            value={age}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('age')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                年龄：
                            </Label>
                            <input style={{textAlign: 'left', width: '100%'}}/>
                        </Input>

                        <div
                            style={{display: (!this.props.ifPaid && this.props.type === 'read') ? 'none' : 'block',}}
                        >
                            <Input
                                placeholder="其他人只有支付了NAS才能看到"
                                transparent
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                value={tel}
                                disabled={this.props.type === 'read'}
                                actionPosition="left"
                                onChange={this.handleChange('tel')}
                                labelPosition='right'
                            >
                                <Label
                                    basic
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#fff',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    电话：
                                </Label>
                                <input style={{textAlign: 'left', width: '100%'}}/>
                            </Input>

                            <Input
                                placeholder="其他人只有支付了NAS才能看到"
                                transparent
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                value={wechat}
                                disabled={this.props.type === 'read'}
                                actionPosition="left"
                                onChange={this.handleChange('wechat')}
                                labelPosition='right'
                            >
                                <Label
                                    basic
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#fff',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    微信：
                                </Label>
                                <input style={{textAlign: 'left', width: '100%'}}/>
                            </Input>
                        </div>

                        <Input
                            placeholder="北京市朝阳区"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            value={address}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('address')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                所在地区：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="工程师/产品经理"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            value={profession}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('profession')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                工作职业：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="旅游/运动"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            value={hobby}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('hobby')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fff',
                                    fontSize: '16px',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                兴趣爱好：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                    </Segment>
                </Segment>

                <Segment
                    clearing
                    style={{
                        backgroundColor: '#fff',
                        display: this.props.type == 'write' ? 'block' : 'none',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                        }}
                    >
                        <Header
                            style={{
                                color: '#333'
                            }}
                            as='h2' content='添加照片'
                        />

                        <Input
                            placeholder="照片链接，请填写有效的照片地址（将作为首页照片展示）"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic1}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic1')}
                        />
                        <Input
                            placeholder="照片链接，请填写有效的照片地址"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic2}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic2')}
                        />
                        <Input
                            placeholder="照片链接，请填写有效的照片地址"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic3}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic3')}
                        />
                    </Segment>
                </Segment>

                <Segment
                    style={{
                        backgroundColor: '#fff',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fff',
                        }}
                    >
                        <Header
                            style={{
                                color: '#333'
                            }}
                            as='h2' content="想说的话" />
                        <TextArea
                            autoHeight
                            value={description}
                            style={{ minHeight: 200, width: '100%', backgroundColor: '#fff', }}
                            placeholder="可以是对自己的描述，也可以是对对方的期望等等。"
                            disabled={this.props.type === 'read'}
                            onChange={this.handleChange('description')}
                        />
                    </Segment>
                </Segment>

            </div>
        );
    }
}

Friend.propTypes = {};
Friend.defaultProps = {
    type: 'write',
    title: '',
    nick: '',
    sex: '',
    age: '',
    tel: '',
    wechat: '',
    address: '',
    profession: '',
    hobby: '',
    pic1: '',
    pic2: '',
    pic3: '',
    description: '',
    fondCount: 0,
    ifPaid: true,
    onChange: () => {},
    onPay: () => {},
    onLike: () => {},
};

export default Friend;
