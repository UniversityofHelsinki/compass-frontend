import HyButton from '../utilities/HyButton';
import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import FormDialog from '../dialog/FormDialog';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AssignmentAnswersDialog.css';
import { ReactComponent as DialogTooltipIcon } from '../utilities/icons/question.svg';

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
        <Link
            className="view-link"
            as="button"
            to={t('view_written_response')}
            onClick={onButtonClick}
            aria-haspopup="dialog"
        >
            {t('answer_dialog_show_link')}
        </Link>
    );

    const handleOpenTooltipModal = (event) => {
        event.preventDefault();
        console.log('pressed');
    };

    return (
        <FormDialog hide={hide} showComponent={theViewLink} show={showForm} size="xl">
            <Modal.Header className="modal-header" {...closeButton}>
                <Container className="title-container">
                    <div>
                        <Modal.Title>
                            {t('answer_dialog_course')}: {courseTitle}{' '}
                        </Modal.Title>
                    </div>
                    <div>
                        <Modal.Title>
                            {t('answer_dialog_assignment')}: {assignmentTopic}{' '}
                        </Modal.Title>
                    </div>
                    <div>
                        <Modal.Title>
                            {t('answer_dialog_student')}: {userName}{' '}
                        </Modal.Title>
                    </div>
                </Container>
            </Modal.Header>
            <Form className="answers-form">
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col
                                className="written-response-header"
                                id="answer-dialog-written-response-header"
                                lg
                            >
                                {t('answer_dialog_written_response_header')}:
                            </Col>
                        </Row>
                        <Row>
                            <Col className="written-response-content" lg>
                                <Form.Control
                                    type="text"
                                    aria-labelledby="answer-dialog-written-response-header"
                                    value={value}
                                    readOnly
                                    disabled
                                ></Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bottom-left-content">
                                {t('answer_dialog_footer_level')} {order_nbr}
                                <button onClick={handleOpenTooltipModal} className="tooltip-icon">
                                    {' '}
                                    <DialogTooltipIcon />{' '}
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="footer-container ps-0 pe-0">
                    <HyButton onClick={hide} variant="primary">
                        {' '}
                        {t('answer_dialog_close_button')}{' '}
                    </HyButton>
                </Modal.Footer>
            </Form>
        </FormDialog>
    );
};

AssignmentAnswersDialog.protoTypes = {
    order_nbr: PropTypes.number,
    value: PropTypes.string,
    courseTitle: PropTypes.string,
};

export default AssignmentAnswersDialog;
