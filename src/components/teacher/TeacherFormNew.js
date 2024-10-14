import React from 'react';
import PropTypes from 'prop-types';
import './TeacherFormNew.css';
import HyButton from '../utilities/HyButton';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';

const TeacherFormNew = () => {
  const { t } = useTranslation();

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
    </div>
  );
};

TeacherFormNew.propTypes = {
};

export default TeacherFormNew;
