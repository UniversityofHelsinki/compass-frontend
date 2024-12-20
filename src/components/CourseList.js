import './CourseList.css';
import { useTranslation } from 'react-i18next';
import Course from './Course';
import React from 'react';
import useStudentCourses from '../hooks/student/useStudentCourses';
import useGetSignatures from '../hooks/useGetSignatures';

const CourseList = () => {
    const { t } = useTranslation();
    const [courses] = useStudentCourses();
    const courseIds = courses?.map((course) => course.id);
    const [signatures] = useGetSignatures(courseIds || []);

    const listCourses = () => {
        return (
            <div>
                <ul className="course-list">
                    {courses.map((course) => (
                        <li key={course.course_id}>
                            <Course course={course} signature={signatures[course.id]} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    if (courses && courses.length > 0 && signatures) {
        return listCourses();
    }

    return <div className="student-no-courses">{t('student_no_courses')}</div>;
};

export default CourseList;
