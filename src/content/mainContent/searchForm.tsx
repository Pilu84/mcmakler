import * as React from 'react';
import { Input, Menu, Dropdown, Button, Row, Col, } from 'antd';
import '../../App.css';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

export interface SearchFormProps extends React.ClassAttributes<any> {
    onSeach(value: string): void;
}

export class SearchForm extends React.Component<SearchFormProps, {}> {
    constructor(props: any) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e: any) {
        this.props.onSeach(e.target.value);
    }

    handleMenuClick() {

    }

    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key='1'>
                1st menu item
              </Menu.Item>
              <Menu.Item key='2' >
                2nd menu item
              </Menu.Item>
              <Menu.Item key='3'>
                3rd menu item
              </Menu.Item>
            </Menu>
          );

        return (
            <Row align='middle'>
                <Input
                    size='large'
                    placeholder='Search for applicant'
                    prefix={<SearchOutlined />}
                    onChange={this.onChange}
                    style={{ width: 200 }}
                />

                <Dropdown overlay={menu}>
                    <Button size='large'>
                        Bids <DownOutlined />
                    </Button>
                </Dropdown>

                <Dropdown overlay={menu}>
                    <Button size='large'>
                        Status <DownOutlined />
                    </Button>
                </Dropdown>
            </Row>
        );
    }

}
