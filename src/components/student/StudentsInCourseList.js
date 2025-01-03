import { useTranslation } from 'react-i18next';
import React from 'react';
import './StudentListInCourse.css';

const StudentsInCourseList = ({ student }) => {
    const { t } = useTranslation();

    return (
        <div className="studentlist-in-course-student-item">
            <div className="studentlist-in-course-column-1">{student.display_name}</div>
            <div className="studentlist-in-course-column-2">{student.user_name}</div>
            <div className="studentlist-in-course-column-3">{student.count}</div>
        </div>
    );
};

StudentsInCourseList.propTypes = {};

export default StudentsInCourseList;
