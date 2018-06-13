import React, { Component } from 'react';
import { Card, Label, Image, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router';

class FriendCard extends Component {

    handleClick = () => {
        this.props.history.push(`/friend/${this.props.friendId}`);
    }
    render() {
        const { title, nick, age, address, pic1, createTime, paidCount, fondCount } = this.props;
        return (
            <Card
                onClick={this.handleClick}
            >
                <Image
                    src={pic1} />
                <Card.Content
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Card.Header>
                        { title }
                    </Card.Header>
                    <Card.Description>
                        { nick }
                    </Card.Description>
                    <Card.Description>
                        { age }
                    </Card.Description>
                    <Card.Description>
                        { address }
                    </Card.Description>
                    <Card.Description>
                        发布于 { new Date(createTime).toDateString() }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra
                              style={{
                                  backgroundColor: '#fffff0',
                              }}
                >
                    <div style={{float:"left", width:"50%"}}>
                        <Icon name='user' />
                        { paidCount } 人联系TA
                    </div>
                    <div style={{float:"right", width:"50%"}} >
                        <Icon name='user' />
                        { fondCount } 人喜欢TA
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

FriendCard.defaultProps = {
    title: '',
    nick: '',
    age: '',
    address: '',
    pic1: '',
    createTime: '',
    paidCount: 0,
    fondCount: 0,
    friendId: ''
};

export default withRouter(FriendCard);
