import React from 'react';
import PropTypes from 'prop-types';
import './StudentCourses.css';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';

const StudentCourses = () => {
  const { t } = useTranslation();

  return (
    <div className="student-courses">
      <TopBar 
        showBackBtn={false}
        heading={t('student_courses_heading')}
      >
      </TopBar>
    </div>
  );
};

StudentCourses.propTypes = {
};

export default StudentCourses;
