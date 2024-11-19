import HyButton from '../utilities/HyButton';
import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import FormDialog from '../dialog/FormDialog';
import CourseEvaluationFooter from './CourseEvaluationFooter';
import PropTypes from 'prop-types';

const CourseEvaluation = ({ modified, isValid, handleAddAnswer, msg, msgStyle, order_nbr }) => {
    const closeButton = { closeButton: true };
    const { t } = useTranslation();
    const [showForm, setShowForm] = useState(false);
    const hide = () => {
        setShowForm(false);
    };

    const onButtonClick = (event) => {
        event.preventDefault();
        setShowForm(true);
        handleAddAnswer();
    };

    const theButton = (
        <HyButton
            variant="primary"
            modified={modified}
            isValid={isValid}
            onClick={onButtonClick}
            className="assignment-form-send-button"
        >
            {t('form_submit')}
        </HyButton>
    );

    let answer_evaluation_form_header = 'answer_evaluation_form_header_' + order_nbr;
    let answer_evaluation_form_text = 'answer_evaluation_form_text_' + order_nbr;
    return (
        <FormDialog hide={hide} showComponent={theButton} show={showForm} size="xl">
            <Modal.Header {...closeButton}>{t(answer_evaluation_form_header)}</Modal.Header>
            <Form className="new-collection-form ms-3 me-3">
                {' '}
                {/* onSubmit={onSubmit}> */}
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col lg>{t(answer_evaluation_form_text)}</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="ps-0 pe-0">
                    <CourseEvaluationFooter
                        isValid={isValid}
                        message={msg}
                        msgStyle={msgStyle}
                    ></CourseEvaluationFooter>
                </Modal.Footer>
            </Form>
        </FormDialog>
    );
};

CourseEvaluation.protoTypes = {
    modified: PropTypes.bool,
    isValid: PropTypes.bool,
    handleAddAnswer: PropTypes.func.isRequired,
    msg: PropTypes.string,
    msgStyle: PropTypes.string,
    order_nbr: PropTypes.number,
};

export default CourseEvaluation;
