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

const AssignmentAnswersDialog = ({ value, order_nbr, userName, courseTitle, assignmentTopic }) => {
    const [showForm, setShowForm] = useState(false);
    const { t } = useTranslation();

    const closeButton = { closeButton: true };

    const hide = () => {
        setShowForm(false);
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

    const { text = '', icon = null } = answerLevelMap[order_nbr] || {};

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
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="footer-container ps-0 pe-0">
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
