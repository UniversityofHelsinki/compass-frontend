import React from 'react';
import SummaryChart from './SummaryChart.js'
import {Col, Container, Row} from "react-bootstrap";
import Header from "../header/Header";
import SummaryTable from "./SummaryTable";

const SummaryPage = () => {
    return (
        <Container className="main-container">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row className="summary-chart-row">
                <Col>
                    <SummaryChart />
                </Col>
            </Row>
            <Row className="summary-table-row">
                <Col>
                    <SummaryTable />
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryPage;