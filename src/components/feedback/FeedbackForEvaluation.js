import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';
import PropTypes from "prop-types";
import {useLocation, Link, useParams} from 'react-router-dom';
import useStudentAnswer from "../../hooks/useStudentAnswer";
import useUser from "../../hooks/useUser";

const FeedbackForEvaluation = () => {
    //const id = useParams();
    //
    const { answer } = useParams();
    const [user] = useUser();
    const feedbackEvaluationPage = true;

    const studentAnswer = useStudentAnswer(answer, user.eppn, feedbackEvaluationPage);

    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_';
    let answer_evaluation_form_text =  'answer_evaluation_form_text_';

    /*const editAssignment = async (event) => {
        //event.preventDefault();
        //<Link to="/assignment"></Link>
    };*/

    const showFeedback = () => {
        return (
            <Container>
                <Row >
                    <Col className="feedback-for-evaluation-assignment">
                        hae nimi tähän
                    </Col>
                    <Col>
                        {t('assignment_feedback_answer')}: {studentAnswer.value}
                    </Col>
                </Row>
                <Row className="feedback-for-evaluation-course">
                    <Col>
                        kurssi tähän
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

    if (studentAnswer === undefined || studentAnswer === null)
        return '';

    return (
        <>
            {showFeedback()}
            <FeedbackForEvaluationFooter disabled={false} message={''} assignment_id={1}
                                         msgStyle={'assignment.msgStyle'} onClick={null}></FeedbackForEvaluationFooter>
        </>
    );

}

FeedbackForEvaluation.propTypes = {
    /*disabled: PropTypes.bool,
    msg: PropTypes.string,
    msgStyle: PropTypes.string,
    value: PropTypes.string,
    order_nbr: PropTypes.string,
    assignment: PropTypes.string,
    course: PropTypes.string*/
};

export default FeedbackForEvaluation;