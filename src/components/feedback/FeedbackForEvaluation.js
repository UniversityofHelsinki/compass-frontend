import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import FeedbackForEvaluationFooter from "./FeedbackForEvaluationFooter";
import './FeedbackForEvaluation.css';
import PropTypes from "prop-types";
import {useLocation, Link, useParams} from 'react-router-dom';

import useUser from "../../hooks/useUser";
import useStudentFeedback from "../../hooks/useStudentFeedback";
import useAssignment from "../../hooks/useAssignment";
import TopBar from "../utilities/TopBar";

const FeedbackForEvaluation = (showBackBtn = true) => {
    const { answer, course, id } = useParams();
    //const backBtnHref = "/student/assignments/" + id;
    const backBtnHref = "/student/courses";
    const [user] = useUser();
    const studentAnswer = useStudentFeedback(answer, course);
    const editable = useAssignment(answer);

    const { t } = useTranslation();
    let answer_evaluation_form_header =  'answer_evaluation_form_header_';
    let answer_evaluation_form_text =  'answer_evaluation_form_text_';
    const backBtnLabels={
        primary: t('assignment_feedback_back_to_course'),
        secondary: t('assignment_feedback_back_to_course_secondary'),
    };

    const showFeedback = () => {
        return (
            <div className="feedback-for-evaluation-form-container">
                <TopBar
                    heading={studentAnswer.topic}
                    showBackBtn={true}
                    backBtnHref={backBtnHref}
                    backBtnLabels={backBtnLabels}
                />
                <div className="m-3"></div>
                <div className="feedback-for-evaluation">
                    <div className="feedback-for-evaluation-answer">
                        <strong>{t('assignment_feedback_answer')}:</strong> {studentAnswer.value}
                    </div>
                    <div className="feedback-for-evaluation-answer">
                        <strong>{t('assignment_feedback_choice')}:</strong> {studentAnswer.order_nbr}
                    </div>
                </div>
                <div className="feedback-for-evaluation-course">
                    {studentAnswer.title}
                </div>
                <div className="m-2"></div>

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
            </div>
        )
    }

    if (studentAnswer === undefined || studentAnswer === null || studentAnswer.value === undefined) {
        return '';
    }

    return (
        <>
            {showFeedback()}
            <FeedbackForEvaluationFooter disabled={editable} message={''} assignment={studentAnswer.assignment_id}
                                         answer={answer} course={course} id={id}
                                         msgStyle={'assignment.msgStyle'} studentAnswer={studentAnswer}></FeedbackForEvaluationFooter>
        </>
    );

}

FeedbackForEvaluation.propTypes = {
    showBackBtn: PropTypes.bool,
};

export default FeedbackForEvaluation;