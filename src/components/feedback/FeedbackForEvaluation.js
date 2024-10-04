import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';

const FeedbackForEvaluation = ({disabled, msg, msgStyle, value, order_nbr, assignment, course}) => {
    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_' + order_nbr;
    let answer_evaluation_form_text =  'answer_evaluation_form_text_' + order_nbr;

    return (
        <>
            <Container>
                <Row >
                    <Col className="feedback-for-evaluation-assignment">
                        {assignment}
                    </Col>
                    <Col>
                        {t('assignment_feedback_answer')}: {value}
                    </Col>
                </Row>
                <Row className="feedback-for-evaluation-course">
                    <Col>
                        {course}
                    </Col>
                    <Col>
                        {t('assignment_feedback_choice')}: {order_nbr}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="feedback-for-evaluation-header">{t(answer_evaluation_form_header)}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {t(answer_evaluation_form_text)}
                    </Col>
                </Row>
            </Container>
            <FeedbackForEvaluationFooter disabled={disabled} message={msg}
                                         msgStyle={msgStyle}></FeedbackForEvaluationFooter>
        </>
    );

}

export default FeedbackForEvaluation;