import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useStudentsInCourse = (courseId) => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.student.students);

    const [response, error, reload] = useGET({
        path: `/api/student/studentsInCourse/${courseId}`,
        tag: `STUDENTS_IN_COURSE_${courseId}`,
    });
    useEffect(() => {
        if (response !== students) {
            dispatch({
                type: 'GET_STUDENTS_IN_COURSE',
                payload: response,
            });
        }
    }, [students, response, dispatch]);

    return [students || [], error, reload];
};
export default useStudentsInCourse;
