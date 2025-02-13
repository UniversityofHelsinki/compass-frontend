import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const useStudentCourse = (id) => {
    const dispatch = useDispatch();
    const [course, setCourse] = useState(null);
    //let [userCourse] = useUserCourse(course);
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
                setCourse(await get());
            })();
        }
    }, [course, dispatch]);
    return [course];
};
export default useStudentCourse;
