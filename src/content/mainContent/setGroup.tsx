import * as React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './content.css';
import { GetCard } from './getCard';


const { Title } = Typography;

interface SetGroupProps extends React.ClassAttributes<any> {
    titel: string;
    type: number;
}

interface SetGroupState extends React.ClassAttributes<any> {
    appointment: number;
}


export class SetGroup extends React.Component<SetGroupProps, SetGroupState> {
    constructor(props: any) {
        super(props);

        this.state = {
            appointment: 0
        };


    }

    render() {

        const { titel, type } = this.props;

        return (
            <>
            <Row>
                <Title level={2}>{titel} ( {this.state.appointment} )</Title>
            </Row>

            <Row>
                <GetCard type={type}/>
            </Row>
            </>
        );
    }

}
