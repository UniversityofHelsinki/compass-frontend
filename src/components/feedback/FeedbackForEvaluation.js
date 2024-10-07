import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';
import PropTypes from "prop-types";
import Assignment from "../assignment/Assignment";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const FeedbackForEvaluation = () => {
    const assignment = useLocation().state;
    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_' + assignment.order_nbr;
    let answer_evaluation_form_text =  'answer_evaluation_form_text_' + assignment.order_nbr;
    const [assignmentPage, setAssignmentPage] = useState(false);

    /*if (assignmentPage) {
        return <Assignment disabled={disabled} value={value} order_nbr={order_nbr} assignment={assignment} course={course}></Assignment>;
    }*/

    const onButtonClick = async (event) => {
        //event.preventDefault();
        setAssignmentPage(true);
    };

    return (
        <>
            <Container>
                <Row >
                    <Col className="feedback-for-evaluation-assignment">
                        {assignment.assignment_name}
                    </Col>
                    <Col>
                        {t('assignment_feedback_answer')}: {assignment.value}
                    </Col>
                </Row>
                <Row className="feedback-for-evaluation-course">
                    <Col>
                        {assignment.course}
                    </Col>
                    <Col>
                        {t('assignment_feedback_choice')}: {assignment.order_nbr}
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
            <FeedbackForEvaluationFooter disabled={assignment.disabled} message={assignment.msg}
                                         msgStyle={assignment.msgStyle} onClick={onButtonClick}></FeedbackForEvaluationFooter>
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