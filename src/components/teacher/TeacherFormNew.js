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

const TeacherFormNew = () => {
    const { t } = useTranslation();
    const [user] = useUser();
    const navigate = useNavigate();

    const [saved, setSaved] = useState(null);

    useEffect(() => {
        if (saved) {
            navigate(`/teacher/forms/edit/${saved.id}`);
            return () => setSaved(null);
        }
    }, [saved]);

    const save = useTeacherFormSave();

    const today = new Date();
    const threeMonths = 3 * 31 * 24 * 60 * 60 * 1000;

    const empty = {
        course_id: '',
        user_name: user.eppn,
        title: '',
        description: '',
        start_date: today.toISOString(),
        end_date: new Date(today.getTime() + threeMonths).toISOString(),
    };

    const handleSave = async (teacherForm) => {
        const saved = await save(teacherForm);
        setSaved(await saved.json());
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
            <TeacherForm onSave={handleSave} teacherForm={empty} />
        </div>
    );
};

TeacherFormNew.propTypes = {};

export default TeacherFormNew;
