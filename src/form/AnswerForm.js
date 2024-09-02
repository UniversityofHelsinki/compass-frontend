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
import RadioButtonGroup from "./RadioButtonGroup";
import Form from "react-bootstrap/Form";


const AnswerForm = (levelOptions) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const changeLevel = (level) => {
        console.info("moi", level)
        setValue(level);
    };

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
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                                <RadioButtonGroup options={levelOptions} onChange={changeLevel} value={value} aria-required />
                    </Form>
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
