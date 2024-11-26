import useUser from './useUser';
import { useGET } from './useHttp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useStudentCourse = (id) => {
    /*const [value, fetchError, reload] = useGET({
        path: `/api/student/course/${id}`,
        tag: `COURSE`,
    });

    useEffect(() => {
    }, [value]);

    return [value];*/

    const dispatch = useDispatch();
    const [course, setCourse] = useState(null);
    const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

    const get = async () => {
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/course/${id}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching  course from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!course) {
            (async () => {
                //dispatch({ type: 'GET_STUDENT_ASSIGNMENT_COURSE', payload: await get() });
                setCourse(await get());
            })();
        }
    }, [course, dispatch]);
    return [course];
};
export default useStudentCourse;
