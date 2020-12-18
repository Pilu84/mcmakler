import * as React from 'react';
import { Layout, PageHeader, Button, Spin, Col, Row, Alert } from 'antd';
import './content.css';
import { SearchForm } from './searchForm';
import { SetGroup } from './setGroup';
import { Services } from '../../services/services';


export interface MainContentProps extends React.ClassAttributes<any> {
    searchValue?: string;
}

export interface MainContentState extends React.ClassAttributes<any> {
    data: any;
    users: any;
    filteredData: any;
    error: boolean;
    errorMessage: string;
}

export class MainContent extends React.Component<MainContentProps, MainContentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: {},
            error: false,
            errorMessage: '',
            filteredData: null,
            users: {}
        };

        this.renderExtra = this.renderExtra.bind(this);
        this.loadData = this.loadData.bind(this);
        this.getSearch = this.getSearch.bind(this);
    }

    componentDidMount() {
        const services = new Services;
        services.getData(this.loadData);
        // For check error
        // this.loadData({});

    }

    loadData(dataIn: any) {
        let error = false;
        if (Object.keys(dataIn).length === 0) {
            error = true;
        }

        setTimeout(() => {
            if (error) {
                this.setState({ error: true, errorMessage: 'The requist failed, please try again later' });
            } else {
                const users = dataIn.user;
                delete dataIn.user;
                const data = dataIn;
                this.setState({ data, users });

                if (this.props.searchValue) {
                    this.getSearch(this.props.searchValue);
                }
            }
        }, 2200);

    }

    render() {
        const { Content } = Layout;
        const { data, error, errorMessage, filteredData, users } = this.state;

        if (Object.keys(data).length === 0 && !error) {
            return (
                <Content>
                    <Layout style={{ minHeight: '50vh' }}>
                        <Row align='middle' justify='center'>
                            <div style={{ height: '100%', alignContent: 'center' }}>
                                <Spin tip='Loading ... ' size={'large'} />
                            </div>
                        </Row>
                    </Layout>
                </Content>
            );
        }

        return (
            <Content>
                <Layout>
                    {error &&
                        <Alert
                            message='Error'
                            description={errorMessage}
                            type='error'
                            showIcon
                        />
                    }

                    {!error &&
                        <div className='site-page-header-ghost-wrapper'>
                            <PageHeader
                                className='site-page-header'
                                onBack={() => null}
                                title='Applicants'
                                ghost={false}
                                extra={[
                                    this.renderExtra(),
                                ]}
                            />

                            <SearchForm
                                onSeach={this.getSearch}
                            />

                            <SetGroup
                                titel='Appointment set'
                                type={1}
                                data={filteredData ? filteredData['Appointment_Set'] : data['Appointment_Set']}
                                user={users}
                            />

                            <SetGroup
                                titel='Property viewed'
                                type={2}
                                data={filteredData ? filteredData['Property_Viewed'] : data['Property_Viewed']}
                                user={users}
                            />

                            <SetGroup
                                titel='Interested'
                                type={3}
                                data={filteredData ? filteredData['Interested'] : data['Interested']}
                                user={users}
                            />

                            <SetGroup
                                titel='Offer accepted'
                                type={4}
                                data={filteredData ? filteredData['Offer_Accepted'] : data['Offer_Accepted']}
                                user={users}
                            />

                        </div>
                    }
                </Layout>
            </Content>
        );
    }

    renderExtra() {
        return (
            <Row gutter={12}>
                <Col span = {4}>
                    <p>34</p>
                    <p>Total</p>
                </Col>
                <Col span = {4}>
                    <p>24</p>
                    <p>New</p>
                </Col>
            </Row>
        );
    }


    getSearch(value: string) {
        const users = this.state.users;
        if (value === '') {
            this.setState({ filteredData: this.state.data });
        } else {
            const data = this.state.filteredData ? this.state.filteredData : this.state.data;
            const filterDataKeys = Object.keys(data);

            const searchValue = value.toLowerCase();
            const searchedData: any = {};

            const selectedUsers = users.filter((user: any) =>
                user.name.toLowerCase().search(searchValue) !== -1 ||
                user.lastname.toLowerCase().search(searchValue) !== -1 ||
                user.email.toLowerCase().search(searchValue) !== -1);
            if (selectedUsers.length === 0) {
                filterDataKeys.forEach((fData: any) => {
                    searchedData[fData] = [];
                });
            } else {
                selectedUsers.forEach((selectUser: any) => {
                    filterDataKeys.forEach((fData: any) => {
                        if (!searchedData[fData]) {
                            searchedData[fData] = [];
                        }
                        const found = data[fData].filter((d: any) => d.userid === selectUser.id);
                        if (found.length !== 0) {
                            searchedData[fData].push(found[0]);
                        }
                    });
                });
            }

            this.setState({ filteredData: searchedData });
        }
    }

}
