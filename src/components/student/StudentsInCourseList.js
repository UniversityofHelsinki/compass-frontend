import { useTranslation } from 'react-i18next';
import React from 'react';
import './StudentListInCourse.css';

const StudentsInCourseList = ({ student }) => {
    const { t } = useTranslation();

    return (
        <div className="student-item">
            <div className="column-1">{student.display_name}</div>
            <div className="column-2">{student.user_name}</div>
            <div className="column-3">{student.count}</div>
        </div>
    );
};

StudentsInCourseList.propTypes = {};

export default StudentsInCourseList;
