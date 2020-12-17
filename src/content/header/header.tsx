import * as React from 'react';
import { PoweroffOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Row, Col, Space } from 'antd';
import '../../App.css';

export class GetHeader extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { Header } = Layout;
        const { SubMenu } = Menu;

        return (
            <Header className='header' style={{ background: '#fff' }}>
                <Row justify='start'>
                    <Col span={12}>
                        <Row>
                            <Menu theme='light' mode='horizontal'>
                                <SubMenu key='sub1' icon={<MenuOutlined />}>
                                    <Menu.Item key='1'>Option 1</Menu.Item>
                                    <Menu.Item key='2'>Option 2</Menu.Item>
                                    <Menu.Item key='3'>Option 3</Menu.Item>
                                    <Menu.Item key='4'>Option 4</Menu.Item>
                                </SubMenu>
                            </Menu>
                            <div className='logo'>
                                <p>McMakler</p>
                            </div>
                        </Row>
                    </Col>

                    <Col span={12}>
                        <Row justify='end'>
                            <Space align='center'>
                                <UserOutlined />
                                <PoweroffOutlined />
                            </Space>
                        </Row>
                    </Col>
                </Row>
            </Header >
        );
    }

}
