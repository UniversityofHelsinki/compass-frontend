import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Notification from "../notes/Notification";
import './Assignment.css';
import { useTranslation } from "react-i18next";
import FormFreeAnswer from "../../form/FormFreeAnswer";
import RadioButtonGroup from "../../form/RadioButtonGroup";
import Form from "react-bootstrap/Form";
import useSelfReflectionModification from "../../hooks/useSelfReflectionModification";
import useSelfReflectionSave from "../../hooks/useSelfReflectionSave";
import useAnswerValidation from "../../hooks/validation/answers/useAnswerValidation";
import ButtonRow from "../actions/ButtornRow";
import CourseEvaluation from "../course/CourseEvaluation";
import useUser from "../../hooks/useUser";
import BackButton from "../utilities/BackButton";

const Assignment = ({showBackBtn = true, backBtnLabels, backBtnHref="/teacher", levels, assignment, course}) => {

    const [user] = useUser();
    const studentId = user.eppn;

    const emptyAnswer = {
        id: '',
        studentid: studentId,
        courseid: 1,
        description_answer: '',
        radio_button_answer: '',
    };
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [isValid, messages, validate] = useAnswerValidation([
        'description_answer', 'radio_button_answer'
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
        <Container className="assignment-form-container">
            <Row className="assignment-form-row">
                <div className="assignment-form-back-col">
                    {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref}/>}
                </div>
                <div className="assignment-form-assignment-col">
                    <h3>{assignment}</h3>
                    <div>{course}</div>
                </div>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer onChange={changeValue} value={true} validationMessage={messages?.description_answer}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                                <RadioButtonGroup options={levels ? levels : []} validationMessage={messages?.radio_button_answer} onChange={changeValue} value={
                                    (modifiedObject && modifiedObject.radio_button_answer) ? modifiedObject.radio_button_answer :  "0"} aria-required />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonRow>
                        <CourseEvaluation modified={modified} isValid={isValid} handleAddAnswer={handleAddAnswer} msg={message} msgStyle={messageStyle} radio_button_answer={modifiedObject.radio_button_answer}>
                        </CourseEvaluation>
                    </ButtonRow>
                </Col>
            </Row>
        </Container>
    );
};

Assignment.propTypes = {
    levels: PropTypes.array.isRequired
};

export default Assignment;
