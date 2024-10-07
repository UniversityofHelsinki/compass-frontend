import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';
import PropTypes from "prop-types";
import Assignment from "../assignment/Assignment";

const FeedbackForEvaluation = ({disabled, msg, msgStyle, value, order_nbr, assignment, course}) => {
    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_' + order_nbr;
    let answer_evaluation_form_text =  'answer_evaluation_form_text_' + order_nbr;
    const [assignmentPage, setAssignmentPage] = useState(false);

    /*if (assignmentPage) {
        return <Assignment disabled={disabled} value={modifiedObject.value} order_nbr={modifiedObject.order_nbr} assignment={assignment} course={course}></Assignment>;
    } */

    const onButtonClick = async (event) => {
        event.preventDefault();
        setAssignmentPage(true);
    };



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
                                         msgStyle={msgStyle} onClick={onButtonClick}></FeedbackForEvaluationFooter>
        </>
    );

}

FeedbackForEvaluation.propTypes = {
    disabled: PropTypes.bool,
    msg: PropTypes.string,
    msgStyle: PropTypes.string,
    value: PropTypes.string,
    order_nbr: PropTypes.string,
    assignment: PropTypes.string,
    course: PropTypes.string
};

export default FeedbackForEvaluation;