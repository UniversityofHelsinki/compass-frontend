import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.statistics || {}); // Ensure it defaults to an empty object
    const [loading, setLoading] = useState(true);
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
            setLoading(false);
        }
        if (error) {
            setLoading(false);
        }
    }, [response, error, dispatch, courseId]);

    return { courses, loading, error };
};

export default useCourseStatistics;
