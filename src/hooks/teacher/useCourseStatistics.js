import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';
import { getCoursesStatistics } from '../../selectors/courseStatisticSelector';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();

    // Use the memoized selector
    const statistics = useSelector(getCoursesStatistics) || {};

    const [loading, setLoading] = useState(true);

    // Use custom hook to fetch data
    const [response, error] = useGET({
        path: `/api/teacher/statistics/course/${courseId}`,
        tag: 'COURSE_STATISTICS',
    });

    // Effect to handle API response
    useEffect(() => {
        if (response) {
            dispatch({
                type: 'SET_COURSE_STATISTICS',
                payload: {
                    courseId,
                    data: response,
                },
            });
            setLoading(false);
        }
        if (error) {
            setLoading(false);
        }
    }, [response, error, dispatch, courseId]);

    // Memoize the course statistics for the specific courseId
    const courseStatistics = useMemo(() => {
        if (courseId in statistics) {
            return statistics[courseId];
        }
        return [];
    }, [statistics, courseId]);

    return { courseStatistics, loading, error };
};

export default useCourseStatistics;
