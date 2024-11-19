import React from 'react';
import PropTypes from 'prop-types';
import './TeacherFormDelete.css';
import TopBar from '../utilities/TopBar.js';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import useTeacherCourse from '../../hooks/useTeacherCourse.js';
import HyButton from '../utilities/HyButton.js';
import { useNotification } from '../../NotificationContext.js';
import useTeacherFormDelete from '../../hooks/teacher/useTeacherFormDelete.js';

const TeacherFormDelete = () => {
    const { t } = useTranslation();
    const { course: id } = useParams();
    const [course] = useTeacherCourse(id);
    const deleteFn = useTeacherFormDelete(id);
    const { setNotification } = useNotification();
    const navigate = useNavigate();

    const deleteCourse = async () => {
        const response = await deleteFn(course);
        if (response.ok) {
            setNotification(t('teacher_form_delete_course_deleted_notification'), 'success', true);
            navigate('/teacher/forms');
        } else if (response.status === 400) {
            setNotification(t((await response.json()).reason), 'error', false);
        } else {
            setNotification(t('unknown_error'), 'error', false, response.status);
        }
    };

    return (
        <div className="teacher-form-delete">
            <TopBar
                heading={t('teacher_form_delete')}
                showBackBtn={true}
                backBtnHref="/teacher/forms"
                backBtnLabels={{
                    primary: t('teacher_forms_back_to_forms'),
                    secondary: t('teacher_forms_back_to_forms_secondary'),
                }}
            />
            <div className="teacher-form-delete-content responsive-margins">
                <h3>{course?.title}</h3>
                <div className="teacher-form-delete-warning">
                    {t('teacher_form_delete_warning')}
                </div>
                <div className="m-2"></div>
                <div className="teacher-form-delete-actions">
                    <HyButton variant="secondary" onClick={() => navigate('/teacher/forms')}>
                        {t('teacher_form_delete_cancel_button_label')}
                    </HyButton>
                    <div className="m-1"></div>
                    <HyButton variant="danger" onClick={deleteCourse}>
                        {t('teacher_form_delete_delete_button_label')}
                    </HyButton>
                </div>
            </div>
        </div>
    );
};

TeacherFormDelete.propTypes = {};

export default TeacherFormDelete;
