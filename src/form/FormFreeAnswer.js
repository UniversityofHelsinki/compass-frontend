import React, { useId } from 'react';
import PropTypes from 'prop-types';
import './FormFreeAnswer.css';
import {Col, Container, Form, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import TextArea from './TextArea';
import FormElementHeader from './FormElementHeader';
//import HelpDialog from '../../dialog/HelpDialog';

const FormFreeAnswer = ({ value, onChange, validationMessage, disabled }) => {
    const { t } = useTranslation();
    const id = useId();

    const changeFreeAnswerTextValue = (event) => {
        onChange('value', event.target.value);
    };

    return (
        <Container className="ps-0">
            <Form.Group>
                <Row>
                    <Col>
                        <FormElementHeader id={id}>
                            {t('form_free_answer')}
                        </FormElementHeader>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextArea aria-labelledby={id}  onChange={changeFreeAnswerTextValue} value={value} message={validationMessage} label={value} aria-required />
                    </Col>
                </Row>
            </Form.Group>
        </Container>
    );
};

FormFreeAnswer.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func,
    message: PropTypes.object,
    disabled: PropTypes.bool
};

export default FormFreeAnswer;
