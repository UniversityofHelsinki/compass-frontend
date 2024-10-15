import React, { useEffect, useState } from 'react';
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

const comparators = {
  title: (direction) => (a, b) => direction*(a.title.localeCompare(b.title)),
  course_id: (direction) => (a, b) => direction*(a.course_id.localeCompare(b.course_id)),
  period: (direction) => (a, b) => {
    const aS = new Date(a.start_date).getTime();
    const bS = new Date(b.start_date).getTime();
    if (aS === bS) {
      return direction * (new Date(a.end_date).getTime() - new Date(b.end_date).getTime());
    }
    return direction * (aS - bS);
  }
};

const ASCENDING = 1;
const DESCENDING = -1;

const sortDirections = {
  title: ASCENDING,
  course_id: ASCENDING,
  period: DESCENDING
};

const TeacherForms = () => {
  const { t } = useTranslation();
  const teacherForms = useTeacherForms();
  const [sortOpts, setSortOpts] = useState({ 
    criteria: 'period',
    direction: DESCENDING
  });

  const changeSortCriteria = (criteria) => {
    if (criteria === sortOpts.criteria) {
      setSortOpts({ criteria, direction: sortOpts.direction * -1 });
    } else {
      setSortOpts({ criteria, direction: sortDirections[criteria] });
    }
  };
  
  const teacherFormsExist = teacherForms && teacherForms.length > 0;

  const sorted = (teacherForms || []).sort(comparators[sortOpts.criteria](sortOpts.direction));

  const content = (() => {
    if (!teacherFormsExist) {
      return <NoTeacherForms />
    }
    return (
      <TeacherFormsTable 
        teacherForms={teacherForms}
        sortOpts={sortOpts}
        onSortCriteriaChange={changeSortCriteria}
      />
    );
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
      <div className="m-3"></div>
      <div className="teacher-forms-content">
        {content}
      </div>
    </div>
  );
};

TeacherForms.propTypes = {
};

export default TeacherForms;
