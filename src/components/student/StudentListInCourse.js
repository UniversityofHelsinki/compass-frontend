import './StudentListInCourse.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import TopBar from '../utilities/TopBar';
import useStudentsInCourse from '../../hooks/student/useStudentsInCourse';
import StudentsInCourseList from './StudentsInCourseList';
import { useParams } from 'react-router-dom';
import './StudentListInCourse.css';

const StudentListInCourse = () => {
    const { title, courseId } = useParams();
    const { t } = useTranslation();
    const [students] = useStudentsInCourse(courseId);

    const listStudents = () => {
        return (
            <>
                <div className="">
                    <TopBar
                        heading={title}
                        showBackBtn={true}
                        backBtnHref="/teacher/forms"
                        backBtnLabels={{
                            primary: t('teacher_forms_back_to_forms'),
                            secondary: t('teacher_forms_back_to_forms_secondary'),
                        }}
                    />
                </div>
                <div className="m-3"></div>
                <div className="studentlist-in-course-container">
                    <div className="studentlist-in-course-column-header">
                        <div className="studentlist-in-course-header-1">
                            {t('teacher_student_in_course_name')}
                        </div>
                        <div className="studentlist-in-course-header-2">
                            {t('teacher_student_in_course_user_name')}
                        </div>
                        <div className="studentlist-in-course-header-3">
                            {t('teacher_student_in_course_assignment_count')}
                        </div>
                    </div>
                    <ul>
                        {students.map((student) => (
                            <li key={student.user_name}>
                                <StudentsInCourseList student={student} />
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    if (students && students.length > 0) {
        return listStudents();
    }

    return (
        <div>
            <TopBar
                heading={t('teacher_students_in_course')}
                showBackBtn={true}
                backBtnHref="/teacher/forms"
                backBtnLabels={{
                    primary: t('teacher_forms_back_to_forms'),
                    secondary: t('teacher_forms_back_to_forms_secondary'),
                }}
            />
            <div className="m-3"></div>
            {t('student_no_courses')}
        </div>
    );
};

export default StudentListInCourse;
