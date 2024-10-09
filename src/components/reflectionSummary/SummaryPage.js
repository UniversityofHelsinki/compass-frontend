import React from 'react';
import SummaryChart from './SummaryChart.js'
import {Col, Container, Row} from "react-bootstrap";
import SummaryTable from "./SummaryTable";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import useStudentReflectionSummary from "../../hooks/student/useStudentReflectionSummary";

const SummaryPage = () => {
    const { course } = useParams();
    const assignments = useStudentReflectionSummary({ course });

    const {t } = useTranslation();

    return (
        <Container className="main-container">
            <div>{course}</div>
            <Row className="summary-chart-row">
                <Col>
                    <SummaryChart assignments={assignments} />
                </Col>
            </Row>
            <Row className="summary-table-row">
                <Col>
                    <SummaryTable assignments={assignments} />
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryPage;