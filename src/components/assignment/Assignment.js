import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Assignment.css';
import { useTranslation } from 'react-i18next';
import FormFreeAnswer from '../../form/FormFreeAnswer';
import RadioButtonGroup from '../../form/RadioButtonGroup';
import useSelfReflectionModification from '../../hooks/useSelfReflectionModification';
import useSelfReflectionSave from '../../hooks/useSelfReflectionSave';
import useAnswerValidation from '../../hooks/validation/answers/useAnswerValidation';
import ButtonRow from '../actions/ButtonRow';
import HyButton from '../utilities/HyButton';
import { useNavigate, useParams } from 'react-router-dom';
import useStudentAssignmentAnswer from '../../hooks/useStudentAssignmentAnswer';
import TopBar from '../utilities/TopBar';
import useGetSignature from '../../hooks/useGetSignature';
import { LEVELS } from '../../Constants';

const Assignment = ({ showBackBtn = true, levels = LEVELS }) => {
    const { assignment, id } = useParams();
    const [studentAnswerData, studentAssignmentAnswer] = useStudentAssignmentAnswer(assignment);
    const courseId = studentAnswerData?.id;

    const [signature] = useGetSignature(id);

    const backBtnHref = `/student/assignments/${id}?signature=${signature}`;
    const studentAnswer = {
        ...studentAnswerData,
        answer_value: studentAssignmentAnswer?.answer_value,
        order_nbr: studentAssignmentAnswer?.order_nbr,
        id: studentAssignmentAnswer?.id,
        assignment_id: studentAssignmentAnswer?.assignment_id,
    };
    const navigate = useNavigate();

    const { t } = useTranslation();
    const [isValid, messages, validate] = useAnswerValidation(
        ['answer_value', 'order_nbr'],
        studentAnswer,
    );
    const [modifiedObject, onChange, modified, clearFormValues] = useSelfReflectionModification(
        studentAnswer,
        validate,
    );
    const [_answer, _message, _messageStyle, addAnswer] = useSelfReflectionSave();
    const formRef = useRef();
    const disabled = false;
    const backBtnLabels = {
        primary: t('assignment_answer_back_to_course'),
        secondary: t('assignment_answer_back_to_course_secondary'),
    };
    const [radioButtonClicked, setRadioButtonClicked] = useState(false);

    const resetFileFields = () => {
        if (formRef.current) {
            setRadioButtonClicked(false);
            formRef.current.reset();
        }
    };

    const handleAddAnswer = async () => {
        const newUser = { ...modifiedObject };
        newUser['course_id'] = studentAnswer.course_id;
        newUser['id'] = studentAnswer.id;
        newUser['assignment_id'] = studentAnswer.assignment_id;
        const answer = await addAnswer(newUser, true);
        let course = studentAnswer.course_id;
        navigate(`/student/feedback/${answer}/${course}/${courseId}`);
    };

    const changeValue = (name, value) => {
        if (name === 'order_nbr') setRadioButtonClicked(true);
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
        <form ref={formRef}>
            <TopBar
                heading={studentAnswer.topic}
                showBackBtn={Boolean(signature)}
                backBtnHref={backBtnHref}
                backBtnLabels={backBtnLabels}
            />
            <div className="responsive-margins">
                <div className="assignment-form-area">
                    <div className="assignment-form-area-cols">
                        <div className="m-3"></div>
                        <div className="assignment-form-row">{studentAnswer.title}</div>
                        <div className="m-2"></div>
                        <Row>
                            <Col>
                                <FormFreeAnswer
                                    onChange={changeValue}
                                    value={modifiedObject && modifiedObject.answer_value}
                                    validationMessage={messages?.answer_value}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label> {t('option_header')}</label>
                                <RadioButtonGroup
                                    answerNotFound={
                                        !radioButtonClicked && studentAssignmentAnswer.id === ''
                                    }
                                    options={
                                        levels
                                            ? levels.map((l) => ({ ...l, label: t(l.label) }))
                                            : []
                                    }
                                    validationMessage={messages?.order_nbr}
                                    onChange={changeValue}
                                    value={
                                        modifiedObject?.order_nbr !== undefined
                                            ? String(modifiedObject?.order_nbr)
                                            : '0'
                                    }
                                    aria-required
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Row>
                    <Col>
                        <ButtonRow>
                            {theButtonClear}
                            {theButtonSave}
                        </ButtonRow>
                    </Col>
                </Row>
            </div>
        </form>
    );
};

Assignment.propTypes = {
    levels: PropTypes.array,
    showBackBtn: PropTypes.bool,
};

export default Assignment;
