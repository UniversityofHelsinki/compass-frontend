import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { invalidate, useGET } from '../useHttp';

const useUserCourse = (course) => {
    const course_id = course?.course_id;
    const dispatch = useDispatch();
    const usercourse = useSelector((state) => state.student.usercourse);

    const [response, error, reload] = useGET({
        path: `/api/student/userCourse/${course_id}`,
        tag: `USER_COURSE_${course?.course_id}`,
    });

    useEffect(() => {
        if (response) {
            dispatch({
                type: 'GET_USER_COURSE',
                payload: response,
            });
        }
    }, [course, usercourse, response, dispatch]);

    return [usercourse, error, reload];
};
export default useUserCourse;
