import * as React from 'react';
import { BrowserRouter, Route, useParams, Switch, useRouteMatch, useLocation } from "react-router-dom";
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
            <BrowserRouter>

                    <Route exact path={'/'}>
                        <Layout>
                            <GetHeader />

                            <MainContent />
                        </Layout>
                    </Route>

                    <Route exact path="/page">
                        <Searching />
                    </Route>
            </BrowserRouter>
        );
    }

}

function Searching() {

    const query = new URLSearchParams(useLocation().search);
    const search = query.get('search');

    return (
        <Layout>
            <GetHeader />

            <MainContent 
                searchValue={search}
            />
        </Layout>
    );
}
