import './StudentListInCourse.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import TopBar from '../utilities/TopBar';
import useStudentsInCourse from '../../hooks/student/useStudentsInCourse';
import { useParams } from 'react-router-dom';
import StudentFromCourseDeleteDialog from './StudentFromCourseDeleteDialog';
import Table from 'react-bootstrap/Table';

const StudentListInCourse = () => {
    const { title, courseId } = useParams();
    const { t } = useTranslation();
    const [students, reload] = useStudentsInCourse(courseId);

    const listStudents = () => {
        return (
            <div className="responsive-margins">
                <Table borderless size="sm" responsive="xl" className="student-list-table">
                    <caption className="screenreader-only">
                        {t('student_list_table_description')}
                    </caption>
                    <thead>
                        <tr>
                            {[
                                'teacher_student_in_course_name',
                                'teacher_student_in_course_user_name',
                                'teacher_student_in_course_answer_count',
                                'teacher_student_in_course_delete_student',
                            ].map((headerColumn) => {
                                return (
                                    <th key={headerColumn} scope="col">
                                        {t(headerColumn)}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (
                                <tr key={student.user_name}>
                                    <td>{student.display_name}</td>
                                    <td>{student.user_name}</td>
                                    <td>{student.count}</td>
                                    <td>
                                        <StudentFromCourseDeleteDialog
                                            student={student}
                                            courseId={courseId}
                                            reload={reload}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    };

    return (
        <div>
            <TopBar
                heading={title}
                showBackBtn={true}
                backBtnHref="/teacher/forms"
                backBtnLabels={{
                    primary: t('teacher_forms_back_to_forms'),
                    secondary: t('teacher_forms_back_to_forms_secondary'),
                }}
            />
            <div className="m-3"></div>
            {(students && students.length > 0 && listStudents()) || (
                <div className="studentlist-in-course-empty">
                    {t('teacher_students_empty_course')}
                </div>
            )}
        </div>
    );
};

StudentListInCourse.propTypes = {};

export default StudentListInCourse;
