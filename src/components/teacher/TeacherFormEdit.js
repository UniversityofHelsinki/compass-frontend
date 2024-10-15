import React from 'react';
import PropTypes from 'prop-types';
import './TeacherFormEdit.css';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useTeacherCourse from '../../hooks/useTeacherCourse';
import TeacherForm from './TeacherForm';
import useTeacherFormUpdate from '../../hooks/teacher/useTeacherFormUpdate';

const TeacherFormEdit = () => {
  const { t } = useTranslation();
  const { course: id } = useParams();

  const [course, error] = useTeacherCourse(id);
  const update = useTeacherFormUpdate(id);

  const handleUpdate = async (course) => {
    await update({ ...course, id });
  };

  return (
    <div className="teacher-form-edit">
      <TopBar 
        heading={t('teacher_form_edit')}
        showBackBtn={true}
        backBtnHref="/teacher/forms"
        backBtnLabels={{
          primary: t('teacher_forms_back_to_forms'),
          secondary: t('teacher_forms_back_to_forms_secondary')
        }}
      />
      <div className="m-3"></div>
      <TeacherForm 
        teacherForm={course} 
        onSave={handleUpdate}
      />
    </div>
  );
};

TeacherFormEdit.propTypes = {
};

export default TeacherFormEdit;
