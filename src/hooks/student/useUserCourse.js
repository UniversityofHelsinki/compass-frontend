import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useUserCourse = (course) => {
    const course_id = course?.course_id;
    const dispatch = useDispatch();
    const usercourse = useSelector((state) => state.student.usercourse);

    const [response, error, reload] = useGET({
        path: `/api/student/userCourse/${course_id}`,
        tag: `USER_COURSE_${course?.course_id}`,
    });

    useEffect(() => {
        if (response !== usercourse) {
            dispatch({
                type: 'GET_USER_COURSE',
                payload: response,
            });
        }
    }, [usercourse, response, dispatch]);
    /*console.log(
        'usercourse',
        usercourse?.course_id,
        usercourse?.user_name,
        usercourse?.research_authorization,
    );*/
    return [usercourse || [], error, reload];
};
export default useUserCourse;
