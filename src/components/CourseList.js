import useAllCourses from "../hooks/useAllCourses";
import './CourseList.css'
import DropDown from "../form/DropDown";
import {Component, useState} from "react";
import {useTranslation} from "react-i18next";
import * as PropTypes from "prop-types";
import Course from "./Course";
import React from "react";
import useStudentCourses from "../hooks/student/useStudentCourses";

const CourseList = () => {
  const { t } = useTranslation();
  const [courses, error] = useStudentCourses();

  const [selectedOption, setSelectedOption] = useState("");

  const listCourses = () => {
    return(
      <div>
        <ul className="course-list">
          {courses.map((course) =>
            <li key={course.course_id} className="course-row">
              <Course course={course} />
            </li>
          )}
        </ul>
      </div>)
  }

  if (courses && courses.length > 0) {
    return listCourses();
  }

  return (
    <div className="student-no-courses">
      {t('student_no_courses')}
    </div>
  );
}

CourseList.propTypes = {};

export default CourseList;
