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
import useSelfReflectionModification from "../hooks/useSelfReflectionModification";
import useSelfReflectionSave from "../hooks/useSelfReflectionSave";
const AnswerForm = ({levels}) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [modifiedObject, onChange, modified] = useSelfReflectionModification();
    const [answer, message, addAnswer] = useSelfReflectionSave();

    const handleAddAnswer = async () => {
        const newUser = {...modifiedObject};
        const success = await addAnswer(newUser, true);
        //setNotupdated(true);
    }

    const changeValue = (name, value) => {
        onChange(name, value);
    }

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
                    <FormSubjectSelection onChange={changeValue} value={true}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer onChange={changeValue} value={true} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                                <RadioButtonGroup options={levels ? levels : []} onChange={changeValue} value={
                                    (modifiedObject && modifiedObject.multiple_choice_answer) ? modifiedObject.multiple_choice_answer :  "0"} aria-required />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <HyButton variant="primary" onClick={ () => handleAddAnswer() } className="answer-form-send-button" >
                        {t('form_submit')}
                    </HyButton>
                </Col>
            </Row>
            <Row className="mt-2" >
                <> message={ message }
                </>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
