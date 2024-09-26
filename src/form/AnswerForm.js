import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Notification from "../components/notes/Notification";
import './AnswerForm.css';
import { useTranslation } from "react-i18next";
import FormSubjectSelection from "./FormSubjectSelection";
import FormFreeAnswer from "./FormFreeAnswer";
import RadioButtonGroup from "./RadioButtonGroup";
import Form from "react-bootstrap/Form";
import useSelfReflectionModification from "../hooks/useSelfReflectionModification";
import useSelfReflectionSave from "../hooks/useSelfReflectionSave";
import useAnswerValidation from "../hooks/validation/answers/useAnswerValidation";
import ButtonRow from "../components/actions/ButtonRow";
import CourseEvaluation from "../components/course/CourseEvaluation";
import useUser from "../hooks/useUser";

const AnswerForm = ({levels}) => {

    const [user] = useUser();
    const studentId = user.eppn;

    const emptyAnswer = {
        id: '',
        studentid: studentId,
        topic_answer: '',
        description_answer: '',
        multiple_choice_answer: '',
    };
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [isValid, messages, validate] = useAnswerValidation([
        'topic_answer', 'description_answer', 'multiple_choice_answer'
    ], emptyAnswer);
    const [modifiedObject, onChange, modified] = useSelfReflectionModification({...emptyAnswer}, validate);
    const [answer, message, messageStyle, addAnswer] = useSelfReflectionSave();

    const handleAddAnswer = async () => {
        const newUser = {...modifiedObject};
        await addAnswer(newUser, true);
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
                    <FormSubjectSelection onChange={changeValue} validationMessage={messages?.topic_answer}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer onChange={changeValue} validationMessage={messages?.description_answer}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                                <RadioButtonGroup options={levels ? levels : []} validationMessage={messages?.multiple_choice_answer} onChange={changeValue} value={
                                    (modifiedObject && modifiedObject.multiple_choice_answer) ? modifiedObject.multiple_choice_answer :  "0"} aria-required />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonRow>
                        <CourseEvaluation modified={modified} isValid={isValid} handleAddAnswer={handleAddAnswer} msg={message} msgStyle={messageStyle} multiple_choice_answer={modifiedObject.multiple_choice_answer}>
                        </CourseEvaluation>
                    </ButtonRow>
                </Col>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
