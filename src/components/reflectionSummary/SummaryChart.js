import React from 'react';
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, Label} from 'recharts';
import {useTranslation} from "react-i18next";
import './SummaryChart.css'
import {Col, Container, Row} from "react-bootstrap";


const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    }
]

const SummaryChart = () => {
    return (
        <Container>
            <Row className="chart-row">
                <Col className="chart-col">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart width={730} height={250} data={data}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="pv" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};


export default SummaryChart;
