import './Assignments.css';
import React, { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import useStudentCourseAssignmentAnswer from '../../hooks/useStudentCourseAssignmentAnswer';
import useStudentCourse from '../../hooks/useStudentCourse';
import TopBar from '../utilities/TopBar';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import RadioButtonGroup from '../../form/RadioButtonGroup';
import ExternalLink from '../utilities/ExternalLink';
import useValidation from '../../hooks/validation/useTeacherFormValidation';

const AssignmentListItem = ({ previous, assignment, href, style }) => {
    const { t } = useTranslation();
    let anwer =
        assignment?.answered === true ? t('assignments_answered') : t('assignments_not_answered');
    return (
        <Row className="assignments-list-item">
            <Col className="assignments-list-item-link">
                <Link
                    to={href}
                    className={
                        previous === true && assignment?.answered === false
                            ? 'disabled'
                            : style === null
                              ? 'assignments-list-item-link'
                              : style
                    }
                >
                    {assignment?.topic}{' '}
                </Link>
                <Col className="assignments-list-item-answer-status text-md-end">
                    <span
                        className={
                            assignment?.answered === true
                                ? 'assignments-list-item-answered'
                                : 'assignments-list-item-not-answered'
                        }
                    >
                        {anwer}
                    </span>
                </Col>
            </Col>
            <div className="assignments-list-item-secondary">
                <span className="screenreader-only">{t('assignment_list_item_period')}</span>
                <span>
                    {new Date(assignment?.start_date).toLocaleDateString('fi-FI')} -{' '}
                    {new Date(assignment?.end_date).toLocaleDateString('fi-FI')}
                </span>
            </div>
        </Row>
    );
};

const Assignments = () => {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const signature = queryParams.get('signature');
    const { t } = useTranslation();
    let [course] = useStudentCourse(id);
    const [dueAssignments, previousAssignments, errMsg, courseDate] =
        useStudentCourseAssignmentAnswer(course?.course_id, signature, id);
    const backBtnHref = '/student/courses';
    const backBtnLabels = {
        primary: t('assignments_back_to_course'),
        secondary: t('assignments_back_to_course_secondary'),
    };

    const [modified, setModified] = useState({ research_authorization: null });
    const [radioButtonClicked, setRadioButtonClicked] = useState(true);

    const [validationErrors] = useValidation(
        {
            research_authorization: [
                (research_authorization) =>
                    (!research_authorization || research_authorization === null) &&
                    'teacher_form_research_authorization_can_not_be_empty',
            ],
        },
        [modified],
    );

    if (errMsg) {
        return (
            <div className="assignments-message">
                {t(errMsg)} {courseDate}
            </div>
        );
    }

    if (
        !(
            (dueAssignments && dueAssignments?.length > 0) ||
            (previousAssignments && previousAssignments?.length > 0)
        )
    ) {
        return <></>;
    }

    const noDueAssignments = () => {
        if (dueAssignments.length === 0)
            return <div className="assignments-header-empty">{t('assignments_no_ongoing')}</div>;
    };
    const noPreviousAssignments = () => {
        if (previousAssignments.length === 0)
            return <div className="assignments-header-empty">{t('assignments_no_previous')}</div>;
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
                    <ExternalLink to={'/researchpermission'} label={t('research_permission')} />
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

    const onChange = (property, value, element) => {
        setRadioButtonClicked(true);
        setModified({
            ...modified,
            [property]: value,
        });
    };

    return (
        <>
            <TopBar
                heading={course?.title}
                showBackBtn={true}
                backBtnHref={backBtnHref}
                backBtnLabels={backBtnLabels}
            ></TopBar>
            <div className="m-3"></div>
            <div className="responsive-margins">
                <Row>
                    <Col
                        as="h5"
                        id="answer-dialog-written-response-header"
                        className="written-response-header"
                    >
                        {t('answer_dialog_written_response_header')}:
                    </Col>
                </Row>
                <CheckBoxes
                    className="teacher-form-checkbox"
                    onChange={(field, value) => onChange('research_authorization', value, null)}
                    radioButtonClicked={radioButtonClicked}
                    value={modified?.research_authorization}
                    validationError={validationErrors.research_authorization}
                />
                <h3>{t('assignments_due')}</h3>
                {noDueAssignments()}

                <ul className="assignments-list">
                    {dueAssignments.map((assignment) => (
                        <li key={assignment.id} className="mb-3">
                            <AssignmentListItem
                                previous={false}
                                style={modified.research_authorization === null ? 'disabled' : ''}
                                assignment={assignment}
                                href={
                                    assignment.answered === true
                                        ? `/student/feedback/${assignment?.id}/${course?.course_id}/${course?.id}`
                                        : `/student/assignment/${assignment?.id}/${course?.id}/${modified?.research_authorization}`
                                }
                            />
                        </li>
                    ))}
                </ul>

                <h3>{t('assignments_previous')}</h3>
                {noPreviousAssignments()}
                <ul className="assignments-list">
                    {previousAssignments.map((assignment) => (
                        <li key={assignment.id} className="mb-3">
                            <AssignmentListItem
                                previous={true}
                                style={modified.research_authorization === null ? 'disabled' : null}
                                key={assignment.id}
                                assignment={assignment}
                                href={`/student/feedback/${assignment?.id}/${course?.course_id}/${course?.id}`}
                            />
                        </li>
                    ))}
                </ul>

                <h3>{t('assignments_reflection_summary')}</h3>
                <div className="assignments-list-item">
                    <div className="assignments-list-item-link">
                        <Link
                            className={modified.research_authorization === null ? 'disabled' : null}
                            to={`/student/courses/${course?.course_id}/summary`}
                        >
                            {t('assignments_summary')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Assignments.propTypes = {
    assignment: PropTypes.object,
    href: PropTypes.string,
    previous: PropTypes.bool,
};

export default Assignments;
