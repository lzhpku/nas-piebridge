import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Friend from '../../components/Friend';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import { getFriend, checkFriend } from '../../dataAdapter';

class PersonFriend extends Component {
    state = {
        ifWaitforWriteChainDialogOpen: false
    }
    componentDidMount() {
        // fetch data

        getFriend(this.props.match.params.friendId)
            .then(res => {
                this.setState({
                    ...res.friend,
                })
            })
    }
    handlePay = () => {
        checkFriend(this.props.match.params.friendId, this.state.price)
            .then(res => {
                this.setState({
                    ifWaitforWriteChainDialogOpen: true,
                })
            })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifWaitforWriteChainDialogOpen: false,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />
                <Friend
                    type="read"
                    {...this.state}
                >
                    <Button
                        color='twitter'
                        style={{
                            borderRadius: '0',
                            backgroundColor: '#39beff',
                            width: '100%'
                        }}
                        onClick={this.handlePay}
                    >
                        <Icon name='expeditedssl' />
                        支付{this.state.price}NAS查看房主联系方式
                    </Button>
                </Friend>
                <Modal
                    open={this.state.ifWaitforWriteChainDialogOpen}
                    style={{
                        backgroundColor: '#fffff0'
                    }}
                >
                    <Modal.Header
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        注意
                    </Modal.Header>
                    <Modal.Content
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        交易需要15s左右的时间写入区块链，您可以浏览其他内容，请稍后查看。
                    </Modal.Content>
                    <Modal.Actions
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        <Button
                            onClick={this.handleCloseTransactionDelatNoteDialog}
                        >确定</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

PersonFriend.propTypes = {};
PersonFriend.defaultProps = {};

export default withRouter(PersonFriend);
