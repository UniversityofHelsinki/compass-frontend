import React from 'react';
import './StudentListInCourse.css';
import StudentFromCourseDeleteDialog from './StudentFromCourseDeleteDialog';
import PropTypes from 'prop-types';

const StudentsInCourseList = ({ student, courseId, reload }) => {
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

StudentsInCourseList.propTypes = {
    student: PropTypes.object,
    courseId: PropTypes.string,
    reload: PropTypes.func,
};

export default StudentsInCourseList;
