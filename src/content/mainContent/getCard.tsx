import * as React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import './content.css';

const gridStyle = {
    width: '100%'
};

interface GetCardProps extends React.ClassAttributes<any> {
    type: number;
}

interface GetCardState extends React.ClassAttributes<any> {
    color: string;
}


export class GetCard extends React.Component<GetCardProps, GetCardState> {
    constructor(props: any) {
        super(props);

        this.state = {
            color: null
        };

        this.getRandomColor = this.getRandomColor.bind(this);
    }

    componentDidMount() {
        this.getRandomColor();
    }

    render() {


        return (
            <>
                <Card style={{ width: 300 }}>
                    <Card.Grid style={{ ...gridStyle, textAlign: 'center' }}>
                        <Avatar size={74} style={{ color: '#fff', backgroundColor: this.state.color }}>U</Avatar>
                        <p>Name</p>
                        <p>phone</p>
                        <p>email</p>
                        <p>phone</p>
                        <p>info</p>
                    </Card.Grid>
                </Card>
            </>
        );
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({color});
    }

}
