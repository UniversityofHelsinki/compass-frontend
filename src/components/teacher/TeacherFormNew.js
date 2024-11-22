import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TeacherFormNew.css';
import HyButton from '../utilities/HyButton';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import useUser from '../../hooks/useUser';
import useTeacherFormSave from '../../hooks/teacher/useTeacherFormSave';
import TeacherForm from './TeacherForm';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../NotificationContext';

const TeacherFormNew = () => {
    const { t } = useTranslation();
    const [user] = useUser();
    const navigate = useNavigate();
    const { setNotification } = useNotification();

    const [teacherForm, setTeacherForm] = useState(null);

    const [saved, setSaved] = useState(null);

    useEffect(() => {
        if (saved) {
            navigate(`/teacher/forms/edit/${saved.id}`);
            return () => setSaved(null);
        }
    }, [saved]);

    const save = useTeacherFormSave();

    const today = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const threeMonths = 3 * 31 * 24 * 60 * 60 * 1000;

    const empty = {
        course_id: '',
        user_name: user.eppn,
        title: '',
        description: '',
        start_date: new Date(today - (today % oneDay)).toISOString(),
        end_date: new Date(today - (today % oneDay) + threeMonths).toISOString(),
    };

    const handleSave = async (teacherForm) => {
        const saved = await save(teacherForm);
        if (saved.ok) {
            setSaved(await saved.json());
            setNotification(t(`teacher_form_new_saved_notification_success`), 'success', true);
        } else {
            const reason = (await saved.json())?.reason;
            setNotification(
                t(`teacher_form_new_saved_notification_error`),
                'error',
                false,
                t(reason),
            );
            setTeacherForm(teacherForm);
        }
    };

    return (
        <div className="teacher-form-new">
            <TopBar
                heading={t('teacher_form_new')}
                showBackBtn={true}
                backBtnHref="/teacher/forms"
                backBtnLabels={{
                    primary: t('teacher_forms_back_to_forms'),
                    secondary: t('teacher_forms_back_to_forms_secondary'),
                }}
            />
            <div className="m-3"></div>
            <TeacherForm isNew={true} onSave={handleSave} teacherForm={teacherForm || empty} />
        </div>
    );
};

TeacherFormNew.propTypes = {};

export default TeacherFormNew;
