import React from 'react';
import SummaryChart from './SummaryChart.js';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import './StudentSummary.css';
import useStudentAssignmentsForStudent from '../../hooks/teacher/useStudentAssignmentsForStudent';

const StudentSummaryPage = () => {
    const { courseId, studentId } = useParams();
    const [assignments, error, reload] = useStudentAssignmentsForStudent(courseId, studentId);
    const uniqueAnswerUserName = [...new Set(assignments.map((entry) => entry.user_name))][0];
    const { t } = useTranslation();

    return (
        <Container className="main-container">
            <TopBar
                heading={t('summary_heading')}
                showBackBtn={true}
                backBtnHref="/teacher/forms"
                backBtnLabels={{
                    primary: t('summary_back_to_forms'),
                    secondary: t('summary_back_to_forms_secondary'),
                }}
            />
            <Row className="summary-chart-row">
                <Col>
                    <h3 className="center-text">{uniqueAnswerUserName}</h3>
                    <SummaryChart assignments={assignments} />
                </Col>
            </Row>
        </Container>
    );
};

export default StudentSummaryPage;
