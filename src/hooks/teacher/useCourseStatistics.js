import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp'; // Adjust the path as needed

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.statistics);
    const [response, error] = useGET({
        path: `/api/teacher/statistics/course/${courseId}`,
        tag: 'COURSE_STATISTICS',
    });

    useEffect(() => {
        if (response) {
            console.log('API Response:', response); // Debug line to check response
            dispatch({
                type: 'SET_COURSE_STATISTICS',
                courseId,
                payload: response,
            });
        }
    }, [response, dispatch, courseId]);

    return [courses, error];
};

export default useCourseStatistics;
