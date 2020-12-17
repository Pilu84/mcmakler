import * as React from 'react';
import { MainContent } from '../content/mainContent/mainContent';
import { GetHeader } from '../content/header/header';
import { Layout } from 'antd';

interface MainState extends React.ClassAttributes<any> {
    dummy?: any;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);

        this.state = {
        };

    }

    render() {
        
        return (
            <Layout>
                <GetHeader />

                <MainContent />
            </Layout>
        );
    }

}
