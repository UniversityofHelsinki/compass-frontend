import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';
import PropTypes from "prop-types";
import {useLocation, Link, useParams} from 'react-router-dom';
import useStudentAssignmentAnswer from "../../hooks/useStudentAssignmentAnswer";

import useUser from "../../hooks/useUser";

const FeedbackForEvaluation = () => {
    const { answer } = useParams();
    const [user] = useUser();

    const studentAnswer = useStudentAssignmentAnswer(answer);

    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_';
    let answer_evaluation_form_text =  'answer_evaluation_form_text_';

    const showFeedback = () => {
        return (
            <Container>
                <Row >
                    <Col className="feedback-for-evaluation-assignment">
                        {studentAnswer.topic}
                    </Col>
                    <Col>
                        {t('assignment_feedback_answer')}: {studentAnswer.value}
                    </Col>
                </Row>
                <Row className="feedback-for-evaluation-course">
                    <Col>
                        {studentAnswer.title}
                    </Col>
                    <Col>
                        {t('assignment_feedback_choice')}: {studentAnswer.order_nbr}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="feedback-for-evaluation-header">{t(answer_evaluation_form_header + studentAnswer.order_nbr)}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {t(answer_evaluation_form_text + studentAnswer.order_nbr)}
                    </Col>
                </Row>
            </Container>
        )
    }

    if (studentAnswer === undefined || studentAnswer === null || studentAnswer.value === undefined) {
        return '';
    }

    return (
        <>
            {showFeedback()}
            <FeedbackForEvaluationFooter disabled={false} message={''} assignment={studentAnswer.assignment_id}
                                         msgStyle={'assignment.msgStyle'} studentAnswer={studentAnswer}></FeedbackForEvaluationFooter>
        </>
    );

}

FeedbackForEvaluation.propTypes = {
};

export default FeedbackForEvaluation;