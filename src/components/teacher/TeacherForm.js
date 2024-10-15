import React, { useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';
import './TeacherForm.css';
import FormElementHeader from '../../form/FormElementHeader';
import { useTranslation } from 'react-i18next';
import InputField from '../../form/InputField';
import DatePicker from '../../form/DatePicker';
import { ReactComponent as TrashIcon } from '../utilities/icons/trash.svg';

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

const Title = ({ onChange, value, disabled }) => {
    const { t } = useTranslation();
    const id = useId();
    return (
        <FormField field="title" fieldId={id}>
            <InputField
                id={id}
                onChange={onChange}
                value={value}
                placeholder={t('teacher_form_title_placeholder')}
            />
        </FormField>
    );
};

const Identifier = ({ onChange, value }) => {
    const { t } = useTranslation();
    const id = useId();
    return (
        <FormField field="course_id" fieldId={id}>
            <InputField
                id={id}
                onChange={onChange}
                value={value}
                placeholder={t('teacher_form_course_id_placeholder')}
            />
        </FormField>
    );
};

const StartDate = ({ onChange, value }) => {
    const { t } = useTranslation();
    const id = useId();
    return (
        <FormField field="start_date" fieldId={id}>
            <DatePicker id={id} date={value} onChange={onChange} />
        </FormField>
    );
};

const EndDate = ({ onChange, value }) => {
    const { t } = useTranslation();
    const id = useId();
    return (
        <FormField field="end_date" fieldId={id}>
            <DatePicker id={id} date={value} onChange={onChange} />
        </FormField>
    );
};

const Assignment = ({ onChange, assignment, ordinal }) => {
    const { t } = useTranslation();

    const handleChange = (property, value) => {
        onChange({ ...assignment, [property]: value });
    };

    return (
        <div className="teacher-form-assignment">
            <div className="teacher-form-assignment-topic">
                <InputField
                    id={`teacher-form-assignment-topic-label-${ordinal}`}
                    hideMessage={true}
                    onChange={(event) => handleChange('topic', event.target.value)}
                    value={assignment.topic}
                    placeholder={t('teacher_form_assignment_topic_placeholder')}
                />
            </div>
            <div className="m-1"></div>
            <label className="screenreader-only" htmlFor={`assignment-start-date-${ordinal}`}>
                {t('teacher_form_assignment_start_label')}
            </label>
            <DatePicker
                id={`assignment-start-date-${ordinal}`}
                aria-label={t('teacher_form_assignment_start_label')}
                date={assignment.start_date}
                onChange={(date) => handleChange('start_date', date)}
            />
            <div className="m-1"></div>
            <label className="screenreader-only" htmlFor={`assignment-end-date-${ordinal}`}>
                {t('teacher_form_assignment_end_label')}
            </label>
            <DatePicker
                id={`assignment-end-date-${ordinal}`}
                date={assignment.end_date}
                onChange={(date) => handleChange('end_date', date)}
            />
            <div className="m-1"></div>
            <div className="teacher-form-assignment-delete">
                <button onClick={(e) => e.preventDefault()}>
                    <TrashIcon aria-hidden />
                </button>
            </div>
        </div>
    );
};

const createAssignment = () => {
    return {
        topic: '',
        start_date: new Date().toISOString(),
        end_date: new Date().toISOString(),
    };
};

const TeacherForm = ({ teacherForm, onSave }) => {
    const { t } = useTranslation();
    const [modified, setModified] = useState(teacherForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (modified !== teacherForm) {
            setModified(teacherForm);
        }
    }, [teacherForm]);

    if (!modified) {
        return <></>;
    }

    const onChange = (property, value) => {
        setModified({
            ...modified,
            [property]: value,
        });
    };

    const addAssignment = (event) => {
        event.preventDefault();
        const assignments = [createAssignment()];
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

    const onAssignmentChange = (assignment, i) => {
        const assignments = [...modified.assignments];
        assignments.splice(i, 1, assignment);
        onChange('assignments', assignments);
    };

    if (saving) {
        return <div>{t('saving_in_progress')}</div>;
    }

    return (
        <div className="teacher-form">
            <form onSubmit={submit}>
                <Title
                    onChange={(event) => onChange('title', event.target.value)}
                    value={modified.title}
                />
                <Identifier
                    onChange={(event) => onChange('course_id', event.target.value)}
                    value={modified.course_id}
                />
                <div className="teacher-form-dates">
                    <StartDate
                        onChange={(date) => onChange('start_date', date)}
                        value={modified.start_date}
                    />
                    <div className="mx-1"></div>
                    <EndDate
                        onChange={(date) => onChange('end_date', date)}
                        value={modified.end_date}
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
                    <input type="submit" value={t('teacher_form_save_button')} disabled={false} />
                </div>
            </form>
        </div>
    );
};

TeacherForm.propTypes = {
    teacherForm: PropTypes.object,
    onSave: PropTypes.func,
};

export default TeacherForm;
