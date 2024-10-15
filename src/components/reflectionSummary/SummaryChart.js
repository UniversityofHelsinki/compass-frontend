import React from 'react';
import {ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip} from 'recharts';
import {useTranslation} from "react-i18next";
import './SummaryChart.css'
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";


const mapChartData = (assignments) => {
    return assignments.map((assignment) => ({
        assignment_id: assignment.assignment_id,
        order_nbr: assignment.answer.order_nbr,
    }));
};

const SummaryChart = ({ assignments }) => {
    const { t } = useTranslation();
    const processedData = mapChartData(assignments);

    return (
        <Container>
            <Row className="chart-row">
                <Col className="chart-col">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={processedData} width={730} height={250} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="assignment_id"
                                   label={{
                                       value: t('chart_x_axis_label')
                                   }}
                            />
                            <YAxis dataKey="order_nbr"
                                   domain={[0, 5]}
                                   tickCount={6}
                                   label={{
                                       value: t('chart_y_axis_label'),
                                       angle: -90,
                                       position: 'insideLeft',
                                       dy: -5,
                                   }}
                            />
                            <Tooltip />
                            <Line type="linear" dataKey="order_nbr" stroke="#107eab" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

SummaryChart.propTypes = {
    assignments: PropTypes.object.isRequired
};



export default SummaryChart;
