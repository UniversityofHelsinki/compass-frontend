import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    answer_value: '',
    order_nbr: '',
};

const useStudentFeedback = (assignmentId, course) => {
    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

        const URL = `${COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${assignmentId}/${course}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student feedback from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!data) {
            (async () => {
                setData(await get());
            })();
        }
    }, [data, assignmentId, dispatch]);

    if (!data || data.length === 0) {
        return emptyAnswer;
    }
    return data;
};

export default useStudentFeedback;
