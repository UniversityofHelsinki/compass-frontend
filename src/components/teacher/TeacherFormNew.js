import React from 'react';
import PropTypes from 'prop-types';
import './TeacherFormNew.css';
import HyButton from '../utilities/HyButton';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import useUser from '../../hooks/useUser';
import useTeacherFormSave from '../../hooks/teacher/useTeacherFormSave';
import TeacherForm from './TeacherForm';

const TeacherFormNew = () => {
  const { t } = useTranslation();
  const [user] = useUser();

  const save = useTeacherFormSave();

  const empty = {
    "course_id": "",
    "user_name": user.eppn,
    "title": "",
    "description": "",
    "start_date": new Date().toISOString(),
    "end_date": new Date().toISOString()
  };

  const handleSave = async (teacherForm) => {
    await save(teacherForm);
  };

  return (
    <div className="teacher-form-new">
      <TopBar 
        heading={t('teacher_form_new')}
        showBackBtn={true}
        backBtnHref="/teacher/forms"
        backBtnLabels={{
          primary: t('teacher_forms_back_to_forms'),
          secondary: t('teacher_forms_back_to_forms_secondary')
        }}
      />
      <div className="m-3"></div>
      <TeacherForm 
        onSave={handleSave}
        teacherForm={empty} 
      />
    </div>
  );
};

TeacherFormNew.propTypes = {
};

export default TeacherFormNew;
