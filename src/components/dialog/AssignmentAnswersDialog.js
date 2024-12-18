import HyButton from '../utilities/HyButton';
import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import FormDialog from '../dialog/FormDialog';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AssignmentAnswersDialog.css';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';
import useTeacherFeedbackSave from '../../hooks/teacher/useTeacherFeedbackSave';
import RadioButtonGroup from '../../form/RadioButtonGroup';
import { useAuth } from '../../AuthContext';
import Message from '../../form/Message';
//import useTeacherFeedback from "../../hooks/teacher/useTeacherFeedback";

const AssignmentAnswersDialog = ({
    value,
    order_nbr,
    userName,
    courseTitle,
    assignmentTopic,
    course_id,
    assignment_id,
    feedback_value,
    feedback_order_nbr,
    feedbackId,
}) => {
    const [showForm, setShowForm] = useState(false);
    const { t } = useTranslation();
    const [
        storedFeedback,
        stored,
        style,
        addFeedback,
        onChange,
        radioButtonClicked,
        msg,
        resetValues,
        saveDisabled,
    ] = useTeacherFeedbackSave(course_id, assignment_id, feedback_value, feedback_order_nbr);
    //const [radioButtonClicked, setRadioButtonClicked] = useState(false);
    const closeButton = { closeButton: true };

    const {
        user: { isTeacher, eppn },
    } = useAuth();

    const saveFeedback = () => {
        addFeedback(userName, course_id, assignment_id, feedbackId);
    };
    const changeValue = (property, value) => {
        //if (property && property === 'order_nbr') setRadioButtonClicked(value);
        //if (property && value) onChange(property, value);
        onChange(property, value);
    };

    const hide = () => {
        resetValues();
        setShowForm(false);
        //rerender(true);
    };

    const onButtonClick = (event) => {
        event.preventDefault();
        setShowForm(true);
    };

    const theViewLink = (
        <div className="assignment-answers-list-item-link">
            <Link
                className="view-link"
                as="button"
                to={t('view_written_response')}
                onClick={onButtonClick}
                aria-haspopup="dialog"
            >
                {t('answer_dialog_show_link')}
            </Link>
        </div>
    );

    const answerLevelMap = {
        0: { text: t('level_0'), icon: <Level0Icon /> },
        1: { text: t('level_1'), icon: <Level1Icon /> },
        2: { text: t('level_2'), icon: <Level2Icon /> },
        3: { text: t('level_3'), icon: <Level3Icon /> },
        4: { text: t('level_4'), icon: <Level4Icon /> },
    };
    const teachernswerLevelMap = {
        0: { teacher_text: t('level_0'), teacher_icon: <Level0Icon /> },
        1: { teacher_text: t('level_1'), teacher_icon: <Level1Icon /> },
        2: { teacher_text: t('level_2'), teacher_icon: <Level2Icon /> },
        3: { teacher_text: t('level_3'), teacher_icon: <Level3Icon /> },
        4: { teacher_text: t('level_4'), teacher_icon: <Level4Icon /> },
    };

    const { text = '', icon = null } = answerLevelMap[order_nbr] || {};
    const { teacher_text = '', teacher_icon = null } =
        teachernswerLevelMap[feedback_order_nbr] || {};

    const answerLevelArray = [
        { label: <Level0Icon />, value: '0' },
        { label: <Level1Icon />, value: '1' },
        { label: <Level2Icon />, value: '2' },
        { label: <Level3Icon />, value: '3' },
        { label: <Level4Icon />, value: '4' },
    ];
    const teacherUser = isTeacher && isTeacher !== undefined;
    const feedBackToStudent = (teacherUser) => {
        if (teacherUser === true) {
            return (
                <>
                    <Row>
                        <Col
                            as="h5"
                            id="answer-dialog-written-response-header"
                            className="written-response-header"
                        >
                            {t('answer_dialog_written_feedback_header')}:
                        </Col>
                    </Row>
                    <Row>
                        <Col className="written-response-content" lg>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                aria-labelledby="answer-dialog-written-response-header"
                                onChange={(event) => changeValue('value', event.target.value)}
                                value={stored?.value ? stored?.value : feedback_value}
                                aria-disabled="false"
                            ></Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <label> {t('answer_dialog_feedback_option_header')}</label>
                    </Row>
                    <Row>
                        <Col>
                            <RadioButtonGroup
                                inline
                                answerNotFound={!radioButtonClicked}
                                options={answerLevelArray}
                                onChange={changeValue}
                                value={
                                    stored?.order_nbr === null
                                        ? !!stored?.order_nbr
                                        : stored?.order_nbr
                                }
                                /*value={"3"}*/
                                aria-required
                            />
                        </Col>
                    </Row>
                </>
            );
        } else {
            return <></>;
        }
    };

    return (
        <FormDialog hide={hide} showComponent={theViewLink} show={showForm} size="xl">
            <Modal.Header className="assignment-answer-dialog-header" {...closeButton}>
                <Modal.Title as="h4" className="modal-title">
                    {t('answer_dialog_student')}: {userName}
                </Modal.Title>
            </Modal.Header>
            <Form className="answers-form">
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col as="h5">{courseTitle}</Col>
                        </Row>
                        <Row>
                            <Col as="h5">{assignmentTopic}</Col>
                        </Row>
                        <Row>
                            <Col
                                as="h5"
                                id="answer-dialog-written-response-header"
                                className="written-response-header"
                            >
                                {t('answer_dialog_written_response_header')}:
                            </Col>
                        </Row>
                        <Row>
                            <Col className="written-response-content" lg>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    aria-labelledby="answer-dialog-written-response-header"
                                    value={value}
                                    aria-disabled="true"
                                    disabled
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col as="h5">
                                {t('answer_dialog_footer_level')}:
                                <div className="bottom-left-lower-content">
                                    {icon} {text}
                                </div>
                            </Col>
                            <Col as="h5" className={teacherUser ? 'hidden' : ''}>
                                {t('answer_dialog_feedback_level')}:
                                <div className="bottom-left-lower-content">{teacher_icon}</div>
                            </Col>
                        </Row>
                        <Row className={teacherUser ? 'hidden' : ''}>
                            <Col as="h5">
                                <></>
                            </Col>
                            <Col as="h5">{stored?.value}</Col>
                        </Row>
                        {feedBackToStudent(teacherUser)}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Message type={style}>{t(`${msg}`)}</Message>
                    <HyButton
                        onClick={saveFeedback}
                        variant="primary"
                        disabled={saveDisabled()}
                        className={!teacherUser ? 'hidden' : ''}
                    >
                        {t('answer_dialog_feedback_button')}
                    </HyButton>
                    <HyButton onClick={hide} variant="primary">
                        {t('answer_dialog_close_button')}
                    </HyButton>
                </Modal.Footer>
            </Form>
        </FormDialog>
    );
};

AssignmentAnswersDialog.propTypes = {
    order_nbr: PropTypes.number,
    value: PropTypes.string,
    courseTitle: PropTypes.string,
    userName: PropTypes.string,
    assignmentTopic: PropTypes.string,
};

export default AssignmentAnswersDialog;
