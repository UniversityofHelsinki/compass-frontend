import React from 'react';
import PropTypes from 'prop-types';
import './StudentCourses.css';
import TopBar from '../utilities/TopBar';
import { useTranslation } from 'react-i18next';
import CourseList from "../CourseList";

const StudentCourses = () => {
  const { t } = useTranslation();

  return (
    <div className="student-courses">
      <TopBar 
        showBackBtn={false}
        heading={t('student_courses_heading')}
      >
      </TopBar>
      <CourseList />
        <h4>Korvaa '/courses' polku '/assignment', jos haluat lähettää palautteen </h4>
    </div>
  );
};

StudentCourses.propTypes = {
};

export default StudentCourses;
