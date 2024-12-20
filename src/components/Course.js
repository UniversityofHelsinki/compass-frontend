import { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Course.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useGetSignature from '../hooks/useGetSignature';

const Course = ({ course, signature }) => {
    const { t } = useTranslation();
    const target = `/student/assignments/${course.id}?signature=${signature}`;

    return (
        <div className="course">
            <div className="course-heading">
                <div className="course-heading-link">
                    <Link to={target}>{course.title}</Link>
                </div>
            </div>
            <div className="course-secondary-info">
                <div className="course-secondary-info-period">
                    <span className="screenreader-only">{t('course_list_item_period_label')}</span>
                    {new Date(course.start_date).toLocaleDateString('fi-FI')} -{' '}
                    {new Date(course.end_date).toLocaleDateString('fi-FI')}
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    signature: PropTypes.string,
};
export default Course;
