import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    const statistics = useSelector((state) => state.courses.statistics);

    const [response, error, reload] = useGET({
        path: `/api/teacher/statistics/course/${courseId}`,
        tag: `COURSE_STATISTICS_OR_ASSIGNMENTS_${courseId}`,
    });
    useEffect(() => {
        if (response !== statistics) {
            dispatch({
                type: 'SET_COURSE_STATISTICS',
                payload: response,
            });
        }
    }, [statistics, response, dispatch]);
    return { courseStatistics: statistics || [], error, reload };
};

export default useCourseStatistics;
