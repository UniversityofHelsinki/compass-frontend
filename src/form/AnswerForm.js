import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './AnswerForm.css';
import { useTranslation } from "react-i18next";
import FormSubjectSelection from "./FormSubjectSelection";
import FormFreeAnswer from "./FormFreeAnswer";
import HyButton from "../components/utilities/HyButton";


const AnswerForm = () => {
    const { t } = useTranslation();


    return (
        <Container className="answer-form-container">
            <Row className="answer-form-row">
                <Col className="answer-form-welcome-col">
                    <h1>{t('form_welcome')}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="answer-form-description-col">
                    <p>{t('form_description')} </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormSubjectSelection value={true}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer value={true} />
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <HyButton variant="primary" type="submit" className="answer-form-send-button" >
                        {t('form_submit')}
                    </HyButton>
                </Col>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
