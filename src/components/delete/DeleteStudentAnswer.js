import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DeleteStudentAnswer.css';
import { useLocation, useParams } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import DeleteStudentAnswerFooter from './DeleteStudentAnswerFooter';
import useStudentAnswerRemove from '../../hooks/student/useStudentAnswerRemove';
import Notification from '../notes/Notification';
import TopBar from '../utilities/TopBar';

const DeleteStudentAnswer = () => {
    const { answer, course, id } = useParams();
    const location = useLocation();
    useEffect(() => {}, [location]);
    let studentAnswer = { ...location.state.studentAnswer };
    const [user] = useUser();
    const [disabled, setDisabled] = useState(false);
    const { t } = useTranslation();
    const [response, removeAnswer] = useStudentAnswerRemove();
    const backBtnHref = '/student/courses';
    const backBtnLabels = {
        primary: t('assignment_answer_delete_back_to_course'),
        secondary: t('assignment_answer_delete_back_to_course_secondary'),
    };
    const removeStudentAnswer = () => {
        removeAnswer({ ...studentAnswer, user_name: user.eppn });
        setDisabled(true);
    };

    const showAssignment = () => {
        return (
            <>
                <TopBar
                    heading={studentAnswer.topic}
                    showBackBtn={true}
                    backBtnHref={backBtnHref}
                    backBtnLabels={backBtnLabels}
                />
                <div className="m-3"></div>
                <div className="responsive-margins">
                    <Container>
                        <Row>
                            <Col className="delete-student-answer-title">{studentAnswer.title}</Col>
                        </Row>
                        <Row>
                            <Col className="delete-student-answer-topic">
                                {t('assignment_answer_delete_confirmation')}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    };

    if (
        studentAnswer === undefined ||
        studentAnswer === null ||
        studentAnswer.topic === undefined
    ) {
        return '';
    }

    return (
        <>
            {showAssignment()}
            <div className="responsive-margins">
                <DeleteStudentAnswerFooter
                    disabled={disabled}
                    answer={answer}
                    course={studentAnswer?.course_id}
                    id={id}
                    deleteAnswer={removeStudentAnswer}
                ></DeleteStudentAnswerFooter>
                <Container>
                    <Notification msg={t(response?.message)} type={response?.style} />
                </Container>
            </div>
        </>
    );
};

DeleteStudentAnswer.propTypes = {};

export default DeleteStudentAnswer;
