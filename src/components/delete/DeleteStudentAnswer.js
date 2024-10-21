import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import './DeleteStudentAnswer.css';
import {useLocation} from 'react-router-dom';

import useUser from "../../hooks/useUser";
import DeleteStudentAnswerFooter from "./DeleteStudentAnswerFooter";
import useStudentAnswerRemove from "../../hooks/student/useStudentAnswerRemove";
import Notification from "../notes/Notification";

const DeleteStudentAnswer = () => {
    const location = useLocation();
    useEffect(() => {
    }, [location]);
    let studentAnswer ={...location.state.studentAnswer}
    const [user] = useUser();

    const { t } = useTranslation();
    const [response, removeAnswer] = useStudentAnswerRemove();
    const removeStudentAnswer = () => {
        removeAnswer({...studentAnswer, user_name: user.eppn});
    }

    const showAssignment = () => {
        return (
            <Container>
                <Row >
                    <Col className="feedback-for-evaluation-assignment">
                        {studentAnswer.topic}
                    </Col>
                </Row>
                <Row className="feedback-for-evaluation-course">
                    <Col>
                        {studentAnswer.title}
                    </Col>
                </Row>
                <Row>
                    <Col className="feedback-for-evaluation-assignment">
                        {t('assignment_answer_delete_confirmation')}
                    </Col>
                </Row>
            </Container>
        )
    }

    if (studentAnswer === undefined || studentAnswer === null || studentAnswer.topic === undefined) {
        return '';
    }

    return (
        <>
            {showAssignment()}
            <DeleteStudentAnswerFooter disabled={false} assignment={studentAnswer.assignment_id} course={studentAnswer.course_id} deleteAnswer={removeStudentAnswer}></DeleteStudentAnswerFooter>
            <Container><Notification msg={t(response?.message)} type={response?.style}/></Container>
        </>
    );

}

DeleteStudentAnswer.propTypes = {
};

export default DeleteStudentAnswer;