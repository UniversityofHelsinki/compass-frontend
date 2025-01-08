import { useTranslation } from 'react-i18next';
import React from 'react';
import './StudentListInCourse.css';
import StudentFromCourseDeleteDialog from './StudentFromCourseDeleteDialog';

const StudentsInCourseList = ({ student, courseId, reload }) => {
    const { t } = useTranslation();

    const handleRemoval = (event) => {
        event.preventDefault();
        //onAssignmentRemove();
    };

    return (
        <div className="studentlist-in-course-student-item">
            <div className="studentlist-in-course-column-1">{student.display_name}</div>
            <div className="studentlist-in-course-column-2">{student.user_name}</div>
            <div className="studentlist-in-course-column-3">{student.count}</div>
            <div className="studentlist-in-course-column-delete">
                <StudentFromCourseDeleteDialog
                    student={student}
                    courseId={courseId}
                    reload={reload}
                ></StudentFromCourseDeleteDialog>
            </div>
        </div>
    );
};

StudentsInCourseList.propTypes = {};

export default StudentsInCourseList;
