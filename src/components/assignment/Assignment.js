import React, {useRef, useState} from 'react';
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
import HyButton from "../utilities/HyButton";
import FeedbackForEvaluation from "../feedback/FeedbackForEvaluation";

const Assignment = ({showBackBtn = true, backBtnLabels, backBtnHref="/teacher", levels, assignment, course}) => {

    const [user] = useUser();
    const userid = user.eppn;

    const emptyAnswer = {
        id: '',
        assignmentid: 1,
        userid: userid,
        courseid: 'A1234',
        value: '',
        order_nbr: '',
    };
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [isValid, messages, validate] = useAnswerValidation([
        'value', 'order_nbr'
    ], emptyAnswer);
    const [modifiedObject, onChange, modified, clearFormValues] = useSelfReflectionModification({...emptyAnswer}, validate);
    const [answer, message, messageStyle, addAnswer] = useSelfReflectionSave();
    const formRef = useRef();
    const [feedbackPage, setFeedbackPage] = useState(false);
    const disabled = false;

    if (feedbackPage) {
        return <FeedbackForEvaluation disabled={disabled} msg={message} msgStyle={messageStyle} value={modifiedObject.value} order_nbr={modifiedObject.order_nbr} assignment={assignment} course={course}></FeedbackForEvaluation>;
    }
    const resetFileFields = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleAddAnswer = async () => {
        const newUser = {...modifiedObject};
        await addAnswer(newUser, true);
        setFeedbackPage(true);
    }

    const changeValue = (name, value) => {
        onChange(name, value);
    }

    const clearForm = (event) => {
        //event.preventDefault();
        clearFormValues();
        validate(emptyAnswer);
        resetFileFields();
        //onChange('value', '');
        //onChange('order_nbr', null);
    };

    const onButtonClick = async (event) => {
        event.preventDefault();
        await handleAddAnswer();
    };

    const theButtonClear = (
        <HyButton
            variant="primary" modified={modified} isValid={isValid} onClick={clearForm}
            className="assignment-form-button-clear">
            {t('form_clear')}
        </HyButton>
    );
    const theButtonSave = (
        <HyButton
            variant="primary" modified={modified} isValid={isValid} onClick={onButtonClick}
            className="assignment-form-send-button">
            {t('form_submit')}
        </HyButton>
    );

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
                    <FormFreeAnswer onChange={changeValue} value={modifiedObject && modifiedObject.value} validationMessage={messages?.value}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                                <RadioButtonGroup options={levels ? levels : []} validationMessage={messages?.order_nbr} onChange={changeValue} value={
                                    (modifiedObject && modifiedObject.order_nbr) ? modifiedObject.order_nbr :  "0"} aria-required />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonRow>
                        {theButtonClear}
                        {theButtonSave}
                        {/* <CourseEvaluation modified={modified} isValid={isValid} handleAddAnswer={handleAddAnswer} msg={message} msgStyle={messageStyle} order_nbr={modifiedObject.order_nbr}>
                        </CourseEvaluation> */}
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
