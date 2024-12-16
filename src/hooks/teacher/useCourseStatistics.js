import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useCourseStatistics = (courseId) => {
    const dispatch = useDispatch();
    const [statistics, setStatistics] = useState(null);
    const [error, setError] = useState(null);

    const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/teacher/statistics/course/${courseId}`;
        const response = await fetch(URL);
        if (response.ok) {
            const result = await response.json();
            return result || {};
        }
        throw new Error(
            `Unexpected status code ${response.status} while fetching course assignment statistics from ${URL}`,
        );
    };

    useEffect(() => {
        if (!statistics) {
            (async () => {
                try {
                    setStatistics(await get());
                    setError(null);
                } catch (error) {
                    setStatistics(null);
                    setError(error);
                }
            })();
        }
    }, [statistics, courseId, dispatch]);
    return { courseStatistics: statistics, error };
};

export default useCourseStatistics;
