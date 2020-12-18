import * as React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './content.css';
import { GetCard } from './getCard';


const { Title } = Typography;

interface SetGroupProps extends React.ClassAttributes<any> {
    titel: string;
    type: number;
    data: Array<any>;
    user: Array<any>;
}

interface SetGroupState extends React.ClassAttributes<any> {
    appointment: number;
}


export class SetGroup extends React.Component<SetGroupProps, SetGroupState> {
    constructor(props: any) {
        super(props);

        this.state = {
            appointment: this.props.data.length
        };

    }


    render() {

        const { titel, type, data, user } = this.props;

        return (
            <>
                <Row>
                    <Title level={2}>{titel} ( {this.state.appointment} )</Title>
                </Row>

                <Row>
                    {data.map((element: any) => {
                        const selectedUser = user.filter((u: any) => u.id === element.userid)[0];
                        return (
                            <Row gutter={16}>
                                <GetCard
                                    type={type}
                                    data={selectedUser}
                                />
                            </Row>
                        );
                    })
                    }
                </Row>
            </>
        );
    }

}
