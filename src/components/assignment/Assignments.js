import './Assignments.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import useStudentCourseAssignmentAnswer from '../../hooks/useStudentCourseAssignmentAnswer';
import useStudentCourse from '../../hooks/useStudentCourse';
import TopBar from '../utilities/TopBar';
import PropTypes from 'prop-types';
import Notification from '../notes/Notification';

const AssignmentListItem = ({ previous, assignment, href }) => {
    const { t } = useTranslation();
    let anwer =
        assignment?.answered === true ? t('assignments_answered') : t('assignments_not_answered');
    return (
        <div className="assignments-list-item">
            <div className="assignments-list-item-link">
                <Link
                    to={href}
                    className={
                        previous === true && assignment?.answered === false
                            ? 'disabled'
                            : 'assignments-list-item-link'
                    }
                >
                    {' '}
                    {assignment?.topic}{' '}
                </Link>
                <span
                    className={
                        assignment?.answered === true
                            ? 'assignments-list-item-answered'
                            : 'assignments-list-item-not-answered'
                    }
                >
                    {anwer}
                </span>
            </div>
            <div className="assignments-list-item-secondary">
                <span className="screenreader-only">{t('assignment_list_item_period')}</span>
                <span>
                    {new Date(assignment?.start_date).toLocaleDateString('fi-FI')} -{' '}
                    {new Date(assignment?.end_date).toLocaleDateString('fi-FI')}
                </span>
            </div>
        </div>
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
                <h3>{t('assignments_due')}</h3>

                <ul className="assignments-list">
                    {dueAssignments.map((assignment) => (
                        <li key={assignment.id}>
                            <AssignmentListItem
                                previous={false}
                                assignment={assignment}
                                href={
                                    assignment.answered === true
                                        ? `/student/feedback/${assignment?.id}/${course?.course_id}/${course?.id}`
                                        : `/student/assignment/${assignment?.id}/${course?.id}`
                                }
                            />
                        </li>
                    ))}
                </ul>

                <h3>{t('assignments_previous')}</h3>
                <ul className="assignments-list">
                    {previousAssignments.map((assignment) => (
                        <li key={assignment.id}>
                            <AssignmentListItem
                                previous={true}
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
                        <Link to={`/student/courses/${course?.course_id}/summary`}>
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
