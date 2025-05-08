import React, { useEffect, useId, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './TeacherForm.css';
import { useTranslation } from 'react-i18next';
import DatePicker from '../../form/DatePicker';
import { ReactComponent as TrashIcon } from '../utilities/icons/trash.svg';
import useValidation from '../../hooks/validation/useTeacherFormValidation';
import { Form } from 'react-bootstrap';
import HyButton from '../utilities/HyButton';
import RadioButtonGroup from '../../form/RadioButtonGroup';

const FormField = ({ children, field, fieldId }) => {
    const { t } = useTranslation();
    return (
        <div className={`teacher-form-field teacher-form-${field}`}>
            <label id={`teacher-form-${field}`} htmlFor={fieldId}>
                {t(`teacher_form_${field}`)}
            </label>
            {children}
        </div>
    );
};
FormField.propTypes = {
    children: PropTypes.node,
    field: PropTypes.string,
    fieldId: PropTypes.string,
};

const ValidationMessage = ({ children, id }) => {
    return (
        <div className="validation-message">
            <span id={id} aria-live="polite">
                {children}
            </span>
        </div>
    );
};
ValidationMessage.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
};

const Title = ({ onChange, value, validationError }) => {
    const { t } = useTranslation();
    const id = useId();
    const validationErrorId = useId();
    const validationAttributes = validationError
        ? {
              'aria-invalid': true,
              'aria-errormessage': validationErrorId,
          }
        : {};

    return (
        <FormField field="title" fieldId={id}>
            <Form.Control
                type="text"
                id={id}
                onChange={onChange}
                value={value}
                placeholder={t('teacher_form_title_placeholder')}
                {...validationAttributes}
            />
            <ValidationMessage id={validationErrorId}>{t(validationError)}</ValidationMessage>
        </FormField>
    );
};
Title.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    validationError: PropTypes.string,
};

const Identifier = ({ onChange, value, validationError, disabled }) => {
    const { t } = useTranslation();
    const id = useId();
    const validationErrorId = useId();
    const validationAttributes = validationError
        ? {
              'aria-invalid': true,
              'aria-errormessage': validationErrorId,
          }
        : {};

    return (
        <FormField field="course_id" fieldId={id}>
            <Form.Control
                type="text"
                id={id}
                onChange={onChange}
                value={value}
                disabled={disabled}
                placeholder={t('teacher_form_course_id_placeholder')}
                {...validationAttributes}
            />
            <ValidationMessage id={validationErrorId}>{t(validationError)}</ValidationMessage>
        </FormField>
    );
};
Identifier.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    validationError: PropTypes.string,
    disabled: PropTypes.bool,
};

const CheckBoxes = ({ radioButtonClicked, onChange, value, validationError }) => {
    const { t } = useTranslation();
    const validationErrorId = useId();
    const validationAttributes = validationError
        ? {
              'aria-invalid': true,
              'aria-errormessage': validationErrorId,
          }
        : {};

    const answerLevelMap = {
        0: { text: t('teacher_form_research_authorization_denied'), value: '0' },
        1: { text: t('teacher_form_research_authorization_allowed'), value: '1' },
    };

    const answerLevelArray = [
        { label: t('teacher_form_research_authorization_denied'), value: '0' },
        { label: t('teacher_form_research_authorization_allowed'), value: '1' },
    ];

    return (
        <div>
            <div className="teacher-form-permission-header">
                {t('teacher_form_research_authorization_header')}
            </div>
            <div className="teacher-forms-permission-link-label">
                <a href={'/research-information'} target="_blank" rel="noopener noreferrer">
                    <div className="screenreader-only">{t('opens_in_new_tab')}</div>
                    {t('teacher_form_research_permission_link_label')}
                </a>
            </div>
            <div className="teacher-form-buttons-with-link">
                <RadioButtonGroup
                    inline
                    answerNotFound={!radioButtonClicked}
                    options={answerLevelArray}
                    onChange={onChange}
                    value={value !== null ? String(value) : ''}
                    field="research_authorization"
                    aria-label={answerLevelMap[value]?.text}
                ></RadioButtonGroup>
            </div>
            <ValidationMessage id={validationErrorId}>
                {t(validationError) ? t(validationError) : <br></br>}
            </ValidationMessage>
        </div>
    );
};
CheckBoxes.propTypes = {
    radioButtonClicked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    validationError: PropTypes.string,
};

const StartDate = ({ onChange, value, validationError }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const id = useId();
    const validationErrorId = useId();
    const validationAttributes = validationError
        ? {
              'aria-invalid': true,
              'aria-errormessage': validationErrorId,
          }
        : {};
    const ref = useRef();

    return (
        <FormField field="start_date" fieldId={id}>
            <DatePicker
                id={id}
                ref={ref}
                date={value}
                onChange={onChange}
                locale={currentLanguage}
                {...validationAttributes}
            />
            <ValidationMessage id={validationErrorId}>{t(validationError)}</ValidationMessage>
        </FormField>
    );
};
StartDate.propTypes = {
    onChange: PropTypes.func,
    locale: PropTypes.string,
    value: PropTypes.string,
    validationError: PropTypes.string,
};

const EndDate = ({ onChange, value, validationError }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const id = useId();
    const ref = useRef();
    const validationErrorId = useId();
    const validationAttributes = validationError
        ? {
              'aria-invalid': true,
              'aria-errormessage': validationErrorId,
          }
        : {};

    return (
        <FormField field="end_date" fieldId={id}>
            <DatePicker
                id={id}
                ref={ref}
                date={value}
                onChange={onChange}
                locale={currentLanguage}
                {...validationAttributes}
            />
            <ValidationMessage id={validationErrorId}>{t(validationError)}</ValidationMessage>
        </FormField>
    );
};

EndDate.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    locale: PropTypes.string,
    validationError: PropTypes.string,
};

const Assignment = ({
    onChange,
    assignment,
    ordinal,
    teacherForm,
    validationError,
    onAssignmentRemove,
}) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const type = (() => {
        if (!assignment.id) {
            return 'new';
        }

        if (new Date(assignment.end_date) < new Date()) {
            return 'past';
        }

        if (new Date(assignment.start_date) > new Date()) {
            return 'future';
        }

        return 'current';
    })();

    const startDateRef = useRef();
    const endDateRef = useRef();
    const validationErrorId = useId();
    const validationAttributes = ['topic', 'start_date', 'end_date'].map((p) =>
        validationError[p]
            ? {
                  'aria-invalid': true,
                  'aria-errormessage': `${validationErrorId}-topic`,
              }
            : {},
    );

    const handleChange = (property, value) => {
        onChange({ ...assignment, [property]: value });
    };

    const handleRemoval = (event) => {
        event.preventDefault();
        onAssignmentRemove();
    };

    return (
        <div className="teacher-form-assignment">
            <span className="teacher-form-assignment-marker">{ordinal + 1}.</span>
            <label
                className="screenreader-only"
                htmlFor={`teacher-form-assignment-topic-label-${ordinal}`}
            >
                {t('teacher_form_assignment_topic_label')}
            </label>
            <div className="teacher-form-assignment-topic">
                <Form.Control
                    type="text"
                    id={`teacher-form-assignment-topic-label-${ordinal}`}
                    onChange={(event) => handleChange('topic', event.target.value)}
                    value={assignment.topic}
                    placeholder={t('teacher_form_assignment_topic_placeholder')}
                    {...validationAttributes[0]}
                    disabled={type === 'past' || type === 'current'}
                />
                <ValidationMessage id={`${validationErrorId}-topic`}>
                    {t(validationError.topic)}
                </ValidationMessage>
            </div>
            <div className="m-1"></div>
            <label className="screenreader-only" htmlFor={`assignment-start-date-${ordinal}`}>
                {t('teacher_form_assignment_start_label')}
            </label>
            <div>
                <DatePicker
                    ref={startDateRef}
                    id={`assignment-start-date-${ordinal}`}
                    aria-label={t('teacher_form_assignment_start_label')}
                    date={assignment.start_date}
                    onChange={(date) => handleChange('start_date', date)}
                    locale={currentLanguage}
                    {...validationAttributes[1]}
                    disabled={type === 'past'}
                />
                <ValidationMessage id={`${validationErrorId}-start-date`}>
                    {t(validationError.start_date)}
                </ValidationMessage>
            </div>
            <div className="m-1"></div>
            <label className="screenreader-only" htmlFor={`assignment-end-date-${ordinal}`}>
                {t('teacher_form_assignment_end_label')}
            </label>
            <div>
                <DatePicker
                    ref={endDateRef}
                    id={`assignment-end-date-${ordinal}`}
                    date={assignment.end_date}
                    onChange={(date) => handleChange('end_date', date)}
                    locale={currentLanguage}
                    {...validationAttributes[2]}
                    disabled={type === 'past'}
                />
                <ValidationMessage id={`${validationErrorId}-end-date`}>
                    {t(validationError.end_date)}
                </ValidationMessage>
            </div>
            <div className="m-1"></div>
            <div className="teacher-form-assignment-delete">
                <button
                    onClick={handleRemoval}
                    disabled={type === 'current' || type === 'past'}
                    aria-label={t('teacher_form_delete_assignment_button', {
                        topic: assignment.topic,
                    })}
                >
                    <TrashIcon aria-hidden />
                </button>
            </div>
        </div>
    );
};
Assignment.propTypes = {
    onChange: PropTypes.func,
    locale: PropTypes.string,
    assignment: PropTypes.object,
    ordinal: PropTypes.number,
    teacherForm: PropTypes.object,
    validationError: PropTypes.object,
    onAssignmentRemove: PropTypes.func,
};

const createAssignment = (startDate, endDate) => {
    return {
        topic: '',
        start_date: startDate || new Date(),
        end_date: endDate || new Date(),
    };
};

let now = new Date();
let year = now.getUTCFullYear();
let month = now.getUTCMonth();
let day = now.getUTCDate();
let today = new Date(Date.UTC(year, month, day));

const TeacherForm = ({ teacherForm, onSave, isNew }) => {
    const { t } = useTranslation();
    const [modified, setModified] = useState(teacherForm);

    const [validationErrors] = useValidation(
        {
            research_authorization: [
                (research_authorization) =>
                    (!research_authorization || research_authorization === null) &&
                    'teacher_form_research_authorization_can_not_be_empty',
            ],
            title: [
                (title) => !title && 'teacher_form_title_can_not_be_empty',
                (title) => title.length > 50 && 'teacher_form_title_is_too_long',
            ],
            course_id: [
                (identifier) => !identifier && 'teacher_form_course_id_can_not_be_empty',
                (identifier) => identifier.length > 20 && 'teacher_form_course_id_too_long',
            ],
            start_date: [
                (startDate) => !startDate && 'teacher_form_start_date_can_not_be_empty',
                (startDate) =>
                    modified.end_date &&
                    new Date(startDate) > new Date(modified.end_date) &&
                    'teacher_form_start_date_after_end_date',
            ],
            end_date: [(endDate) => !endDate && 'teacher_form_end_date_can_not_be_empty'],
        },
        [modified],
    );

    const assignmentValidationErrors = useValidation(
        {
            topic: [(topic) => !topic && 'teacher_form_assignment_topic_can_not_be_empty'],
            start_date: [
                (startDate) => !startDate && 'teacher_form_assignment_start_date_can_not_be_empty',
                (startDate, assignment) =>
                    assignment.end_date &&
                    new Date(startDate) > new Date(assignment.end_date) &&
                    'teacher_form_assignment_start_date_after_end_date',
                (startDate) =>
                    modified.start_date &&
                    new Date(startDate) < new Date(modified.start_date) &&
                    'teacher_form_assignment_starts_before_course',
            ],
            end_date: [
                (endDate) => !endDate && 'teacher_form_assignment_end_date_can_not_be_empty',
            ],
        },
        modified?.assignments,
    );

    const [saving, setSaving] = useState(false);

    const isValid = (ve) => Object.values(ve).every((value) => !value);
    const formIsValid = isValid(validationErrors);
    const assignmentsAreValid = assignmentValidationErrors.map(isValid).every((value) => value);

    const [radioButtonClicked, setRadioButtonClicked] = useState(true);

    useEffect(() => {
        if (modified !== teacherForm) {
            setModified(teacherForm);
        }
    }, [teacherForm]);

    if (!modified) {
        return <></>;
    }

    const onChange = (property, value, element) => {
        setRadioButtonClicked(true);
        setModified({
            ...modified,
            [property]: value,
        });
    };

    const onAssignmentChange = (assignment, i) => {
        const assignments = [...modified.assignments];
        assignments.splice(i, 1, assignment);
        setModified({
            ...modified,
            assignments,
        });
    };

    const onAssignmentRemove = (i) => {
        const assignments = [...modified.assignments];
        assignments.splice(i, 1);
        setModified({
            ...modified,
            assignments,
        });
    };

    const addAssignment = (event) => {
        event.preventDefault();
        const assignments = [createAssignment(modified.start_date, modified.end_date)];
        onChange(
            'assignments',
            modified.assignments ? [...modified.assignments, ...assignments] : assignments,
        );
    };

    const submit = async (event) => {
        event.preventDefault(event);
        setSaving(true);
        await onSave(modified);
        setSaving(false);
    };

    if (saving) {
        return <div>{t('saving_in_progress')}</div>;
    }

    return (
        <div className="teacher-form">
            <form onSubmit={submit}>
                <CheckBoxes
                    className="teacher-form-checkbox"
                    onChange={(field, value) => onChange('research_authorization', value, null)}
                    radioButtonClicked={radioButtonClicked}
                    value={modified?.research_authorization}
                    validationError={validationErrors.research_authorization}
                />
                <Title
                    onChange={(event) => onChange('title', event.target.value, event.target)}
                    value={modified.title}
                    validationError={validationErrors.title}
                />
                <Identifier
                    onChange={(event) => onChange('course_id', event.target.value, event.target)}
                    value={modified.course_id}
                    validationError={validationErrors.course_id}
                    disabled={!isNew}
                />
                <div className="teacher-form-dates">
                    <StartDate
                        onChange={(date, element) => onChange('start_date', date, element)}
                        value={modified.start_date}
                        validationError={validationErrors.start_date}
                    />
                    <div className="mx-1"></div>
                    <EndDate
                        onChange={(date, element) => onChange('end_date', date, element)}
                        value={modified.end_date}
                        validationError={validationErrors.end_date}
                    />
                </div>
                <div className="teacher-form-assignments">
                    <ol>
                        {(modified.assignments || []).map((assignment, i) => (
                            <li key={`assignment-${i}`}>
                                <Assignment
                                    ordinal={i}
                                    assignment={modified.assignments[i]}
                                    onChange={(assignment) => onAssignmentChange(assignment, i)}
                                    onAssignmentRemove={() => onAssignmentRemove(i)}
                                    teacherForm={modified}
                                    validationError={assignmentValidationErrors[i]}
                                />
                            </li>
                        ))}
                    </ol>
                    <button
                        className="teacher-form-assignments-add-button"
                        onClick={(event) => addAssignment(event)}
                    >
                        {t('teacher_form_add_assignment')}
                    </button>
                </div>
                <div className="teacher-form-buttons">
                    <HyButton
                        variant="primary"
                        type="submit"
                        disabled={!formIsValid || !assignmentsAreValid}
                    >
                        {t('teacher_form_save_button')}
                    </HyButton>
                </div>
            </form>
        </div>
    );
};

TeacherForm.propTypes = {
    teacherForm: PropTypes.object,
    onSave: PropTypes.func,
    isNew: PropTypes.bool,
};

export default TeacherForm;
