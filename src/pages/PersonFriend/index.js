import React, {Component} from 'react';
import Friend from '../../components/Friend';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import { getFriend, checkFriend, fondFriend } from '../../dataAdapter';

class PersonFriend extends Component {

    state = {
        ifWaitforWriteChainDialogOpen: false
    }
    componentDidMount() {
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
    handleLike = () => {
        fondFriend(this.props.match.params.friendId)
            .then(res => {
                this.setState({
                    ifWaitforWriteChainDialogOpen: true,
                })
            })
    }
    render() {
        return (
            <div>
                <PageHeader />

                <Friend
                    type="read"
                    onLike={this.handleLike}
                    onPay={this.handlePay}
                    {...this.state}
                >
                </Friend>

                <Modal
                    open={this.state.ifWaitforWriteChainDialogOpen}
                    style={{
                        backgroundColor: '#fff'
                    }}
                >
                    <Modal.Header
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        温馨提示
                    </Modal.Header>
                    <Modal.Content
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                    >
                        交易需要15s左右的时间写入区块链，您可以浏览其他内容，请稍后查看。
                    </Modal.Content>
                    <Modal.Actions
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fff'
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
