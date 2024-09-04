import React, { useId } from 'react';
import PropTypes from 'prop-types';
import './FormSubjectSelection.css';
import {Col, Container, Form, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import InputField from './InputField';
import FormElementHeader from "./FormElementHeader";

const FormSubjectSelection = ({ subject, onChange, message, disabled }) => {
    const { t } = useTranslation();
    const id = useId();

    const changeSubjectValue = (event) => {
        onChange('first_answer', event.target.value);
    };

    return (
        <Container className="ps-0">
            <Form.Group>
                <Row>
                    <Col>
                        <FormElementHeader id={id}>
                            {t('form_subject_select')}
                        </FormElementHeader>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputField aria-labelledby={id} label={subject} value={subject}
                                    onChange={changeSubjectValue} aria-required />
                    </Col>
                </Row>
            </Form.Group>
        </Container>
    );
};

FormSubjectSelection.propTypes = {

};

export default FormSubjectSelection;
