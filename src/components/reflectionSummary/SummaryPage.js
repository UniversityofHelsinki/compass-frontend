import React from 'react';
import SummaryChart from './SummaryChart.js';
import { Col, Container, Row } from 'react-bootstrap';
import SummaryTable from './SummaryTable';
import { useParams } from 'react-router-dom';
import useStudentReflectionSummary from '../../hooks/student/useStudentReflectionSummary';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';

const SummaryPage = () => {
    const { course } = useParams();
    const assignments = useStudentReflectionSummary({ course });
    const { t } = useTranslation();

    return (
        <Container className="main-container">
            <TopBar
                heading={t('summary_heading')}
                showBackBtn={true}
                backBtnHref="/student/courses"
                backBtnLabels={{
                    primary: t('summary_back_to_forms'),
                    secondary: t('summary_back_to_forms_secondary'),
                }}
            />
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
