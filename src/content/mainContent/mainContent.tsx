import * as React from 'react';
import { Layout, PageHeader, Button } from 'antd';
import './content.css';
import { SearchForm } from './searchForm';
import { SetGroup } from './setGroup';


export class MainContent extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);


        this.renderTotal = this.renderTotal.bind(this);
        this.renderNew = this.renderNew.bind(this);
        this.renderViewed = this.renderNew.bind(this);
        this.renderAppointment = this.renderAppointment.bind(this);
        this.renderOthers = this.renderOthers.bind(this);
    }

    render() {
        const { Content } = Layout;

        return (
            <Content>
                <Layout>
                    <div className='site-page-header-ghost-wrapper'>
                        <PageHeader
                            className='site-page-header'
                            onBack={() => null}
                            title='Applicants'
                            ghost={false}
                            extra={[
                                this.renderTotal(),
                                this.renderNew(),
                                this.renderViewed(),
                                this.renderAppointment(),
                                this.renderOthers()
                            ]}
                        />

                        <SearchForm />

                        <SetGroup
                            titel='Appointment set'
                            type={1}
                        />

                        <SetGroup
                            titel='Property viewed'
                            type={2}
                        />

                        <SetGroup
                            titel='Interested'
                            type={3}
                        />

                        <SetGroup
                            titel='Offer accepted'
                            type={4}
                        />

                    </div>
                </Layout>
            </Content>
        );
    }

    renderTotal() {
        return (
            <Button key='3'>Operation</Button>
        );
    }
    renderNew() { }
    renderViewed() { }
    renderAppointment() { }
    renderOthers() { }

}
