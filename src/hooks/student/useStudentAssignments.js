import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStudentAssignments = ({ course }) => {
    const [assignments, setAssignments] = useState(null);
    const dispatch = useDispatch();

    const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/courses/${course}/assignments`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student assignments from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!assignments) {
            (async () => {
                setAssignments(await get());
            })();
        }
    }, [assignments, course, dispatch]);

    return assignments;
};

export default useStudentAssignments;
