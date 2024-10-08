import React from 'react';
import PropTypes from 'prop-types';
import './TeacherForms.css';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import useTeacherForms from '../../hooks/teacher/useTeacherForms';
import TeacherFormsTable from './TeacherFormsTable';
import HyButton from '../utilities/HyButton';
import { Link, Outlet } from 'react-router-dom';

const NoTeacherForms = () => {
  const { t } = useTranslation();
  return (
    <p className="teacher-forms-no-forms p-2">
      {t('teacher_forms_no_forms')}
    </p>
  );
};

const TeacherForms = () => {
  const { t } = useTranslation();
  const teacherForms = useTeacherForms();

  const noTeacherForms = !teacherForms || teacherForms.length === 0;

  const content = (() => {
    if (noTeacherForms) {
      return <NoTeacherForms />
    }
    return <TeacherFormsTable />
  })();

  return (
    <div className="teacher-forms">
      <div>
        <TopBar 
          heading={t('teacher_forms_heading')}
        >
          <div className="teacher-forms-new-form">
            <Link to="new">{t('teacher_forms_new_course')}</Link>
          </div>
        </TopBar>
      </div>
      <div className="teacher-forms-content">
        {content}
      </div>
    </div>
  );
};

TeacherForms.propTypes = {
};

export default TeacherForms;
