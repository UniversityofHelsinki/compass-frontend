import React from 'react';
import PropTypes from 'prop-types';
import './TeacherForms.css';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';

const TeacherForms = () => {
  const { t } = useTranslation();
  return (
    <div className="teacher-forms">
      <TopBar 
        heading={t('teacher_forms_heading')}
        showBackBtn={false}
        backBtnHref="/teacher"
        backBtnLabels={{
          primary: 'asdf',
          secondary: 'asdfasdffds'
        }}
      >
      </TopBar>
    </div>
  );
};

TeacherForms.propTypes = {
};

export default TeacherForms;
