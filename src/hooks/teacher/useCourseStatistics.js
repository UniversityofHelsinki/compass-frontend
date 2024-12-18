import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    //const [statistics, setStatistics] = useState(null);
    const statistics = useSelector((state) => state.courses.statistics || {});

    const [loading, setLoading] = useState(true);

    const [response, error] = useGET({
        path: `/api/teacher/statistics/course/${courseId}`,
        tag: `COURSE_STATISTICS_${courseId}`,
    });
    /*const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/teacher/statistics/course/${courseId}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching course statistics from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };*/

    useEffect(() => {
        //if (statistics  === undefined || statistics === null) {
        if (response) {
            dispatch({
                type: 'SET_COURSE_STATISTICS',
                payload: {
                    courseId,
                    data: response,
                },
            });
            setLoading(false);
            /*(async () => {
                setStatistics({[courseId]: await get()});
            })();*/
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
