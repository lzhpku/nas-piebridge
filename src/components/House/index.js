import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea, Card, Image, Label, Form, Checkbox } from 'semantic-ui-react';
import './style.css';

class House extends Component {
    handleChange = (type, housePrice) => (e) => {
        const {
            title,
            nick,
            sex,
            age,
            tel,
            wechat,
            address,
            profession,
            hobit,
            pic1,
            pic2,
            pic3,
            description,
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
            hobit,
            pic1,
            pic2,
            pic3,
            description,
            [type]: e.target.value,
        });
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
            hobit,
            pic1,
            pic2,
            pic3,
            description,
        } = this.props;
        return (
            <div
                style={{
                    maxWidth: '900px',
                    margin: '40px auto',
                }}
                className="c-House"
            >
                <Segment
                    clearing
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
                        }}
                    >
                        <Input
                            placeholder="想个吸引眼球的标题吧"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginBottom: '40px'
                            }}
                            value={title}
                            disabled={this.props.type === 'read'}
                            input={<input
                                style={{
                                    textAlign: 'left', fontSize: '28px',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('title')}
                        />
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
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
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    昵称：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
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
                                        backgroundColor: '#fffff0',
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
                                        name='sex'
                                        value='male'
                                        checked={sex === 'male'}
                                        onChange={this.handleChange('sex')}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Checkbox
                                        radio
                                        label='女'
                                        name='sex'
                                        value='female'
                                        checked={sex === 'female'}
                                        onChange={this.handleChange('sex')}
                                    />
                                </Form.Field>
                            </Form>

                            <Input
                                placeholder=""
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
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    年龄：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
                            </Input>

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
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    电话：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
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
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    微信：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
                            </Input>

                            <div
                                style={{
                                    position: 'absolute',
                                    ...(!this.props.ifPaid && this.props.type === 'read'
                                        ? { height: '100%', width: '100%', top: '0', left: '0',
                                                background: '#fffff0' }
                                        : { display: 'none'}
                                    ),
                                }}
                            >
                                {this.props.children}
                            </div>
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
                                    backgroundColor: '#fffff0',
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
                                    backgroundColor: '#fffff0',
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
                            value={hobit}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('hobit')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
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
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
                        }}
                    >
                        <Header
                            style={{
                                color: '#333'
                            }}
                            as='h2' content={this.props.type == 'write' ? '添加照片' : '照片展示'} />
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
                        <Card.Group
                            itemsPerRow={3}
                            style={{
                                padding: '40px',
                            }}
                        >
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic1} />
                            </Card>
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic2} />
                            </Card>
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic3} />
                            </Card>
                        </Card.Group>
                    </Segment>
                </Segment>

                <Segment
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
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
                            style={{ minHeight: 200, width: '100%', backgroundColor: '#fffff0', }}
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

House.propTypes = {};
House.defaultProps = {
    type: 'write',
    title: '',
    nick: '',
    sex: '',
    age: '',
    tel: '',
    wechat: '',
    address: '',
    profession: '',
    hobit: '',
    pic1: '',
    pic2: '',
    pic3: '',
    description: '',
    ifPaid: true,
    onChange: () => {},
};

export default House;
