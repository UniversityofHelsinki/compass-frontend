import React, { useEffect } from 'react';
import SummaryChart from './SummaryChart.js';
import { Col, Container, Row } from 'react-bootstrap';
import SummaryTable from './SummaryTable';
import { useParams } from 'react-router-dom';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import useStudentAssignments from '../../hooks/student/useStudentAssignments';
import { invalidate } from '../../hooks/useHttp';

const SummaryPage = () => {
    const { course } = useParams();
    const [assignments, error, reload] = useStudentAssignments({ course });
    const { t } = useTranslation();

    useEffect(() => {
        invalidate([`COURSE_STATISTICS_OR_ASSIGNMENTS_${course}`]);
        reload();
    }, []);

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
                    <SummaryTable course={course} reload={reload} assignments={assignments} />
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryPage;
