import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Assignment.css';
import { useTranslation } from 'react-i18next';
import FormFreeAnswer from '../../form/FormFreeAnswer';
import RadioButtonGroup from '../../form/RadioButtonGroup';
import Form from 'react-bootstrap/Form';
import useSelfReflectionModification from '../../hooks/useSelfReflectionModification';
import useSelfReflectionSave from '../../hooks/useSelfReflectionSave';
import useAnswerValidation from '../../hooks/validation/answers/useAnswerValidation';
import ButtonRow from '../actions/ButtonRow';
import useUser from '../../hooks/useUser';
import BackButton from '../utilities/BackButton';
import HyButton from '../utilities/HyButton';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useStudentAssignmentAnswer from '../../hooks/useStudentAssignmentAnswer';

const Assignment = ({ showBackBtn = true, backBtnLabels, backBtnHref = '/student/assignments', levels }) => {
    const { assignment, course_id } = useParams();
    backBtnHref = backBtnHref + '/${course_id}';
    const [user] = useUser();
    const [studentAnswerData, studentAssignmentAnswer] = useStudentAssignmentAnswer(assignment);
    const studentAnswer = {...studentAnswerData,
        value: studentAssignmentAnswer?.value,
        order_nbr: studentAssignmentAnswer?.order_nbr,
        id: studentAssignmentAnswer?.id,
        topic: studentAssignmentAnswer?.topic,
        assignment_id: studentAssignmentAnswer?.assignment_id};
    const navigate = useNavigate();

    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [isValid, messages, validate] = useAnswerValidation(
        ['value', 'order_nbr'],
        studentAnswer,
    );
    const [modifiedObject, onChange, modified, clearFormValues, updateModObj] =
        useSelfReflectionModification(studentAnswer, validate);
    const [_answer, _message, _messageStyle, addAnswer] = useSelfReflectionSave();
    const formRef = useRef();
    const disabled = false;

    const resetFileFields = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleAddAnswer = async () => {
        const newUser = { ...modifiedObject };
        newUser['course_id'] = studentAnswer.course_id;
        newUser["id"] = studentAnswer.id;
        newUser["assignment_id"] = studentAnswer.assignment_id;
        const answer = await addAnswer(newUser, true);
        let course = studentAnswer.course_id;
        navigate(`/student/feedback/${answer}/${course}`);
    };

    const changeValue = (name, value) => {
        onChange(name, value);
    };

    const clearForm = (event) => {
        clearFormValues();
        resetFileFields();
    };

    const onButtonClick = async (event) => {
        event.preventDefault();
        await handleAddAnswer();
    };

    const theButtonClear = (
        <HyButton
            variant="primary"
            disabled={!modified}
            onClick={clearForm}
            className="assignment-form-button-clear"
        >
            {t('form_clear')}
        </HyButton>
    );
    const theButtonSave = (
        <HyButton
            variant="primary"
            disabled={!modified || !isValid}
            onClick={onButtonClick}
            className="assignment-form-send-button"
        >
            {t('form_submit')}
        </HyButton>
    );

    return (
        <Container className="assignment-form-container">
            <Row className="assignment-form-row">
                <div className="assignment-form-back-col">
                    {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref} />}
                </div>
                <div className="assignment-form-assignment-col">
                    <h3>{studentAnswer.topic}</h3>
                    <div>{studentAnswer.title}</div>
                </div>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer
                        onChange={changeValue}
                        value={modifiedObject && modifiedObject.value}
                        validationMessage={messages?.value}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> {t('option_header')}</Form.Label>
                        <RadioButtonGroup
                            options={levels ? levels : []}
                            validationMessage={messages?.order_nbr}
                            onChange={changeValue}
                            value={
                                modifiedObject && modifiedObject.order_nbr
                                    ? modifiedObject.order_nbr
                                    : '0'
                            }
                            aria-required
                        />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonRow>
                        {theButtonClear}
                        {theButtonSave}
                    </ButtonRow>
                </Col>
            </Row>
        </Container>
    );
};

Assignment.propTypes = {
    levels: PropTypes.array.isRequired,
    showBackBtn: PropTypes.bool,
    backBtnLabels: PropTypes.object,
    backBtnHref: PropTypes.string,
};

export default Assignment;
