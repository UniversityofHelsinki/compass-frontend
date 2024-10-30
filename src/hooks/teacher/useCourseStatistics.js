import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';
import useTeacherCourse from '../useTeacherCourse';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    const statistics = useSelector((state) => state.courses.statistics || {});
    const [course] = useTeacherCourse(courseId);

    const [loading, setLoading] = useState(true);

    const [response, error] = useGET({
        path: `/api/teacher/statistics/course/${courseId}`,
        tag: `COURSE_STATISTICS_${courseId}`,
    });

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
