import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const useStudentAnswers = ({ course }) => {
    const [answers, setAnswers] = useState(null);
    const dispatch = useDispatch();

    const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/courses/${course}/answers`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student answers from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!answers) {
            (async () => {
                setAnswers(await get());
            })();
        }
    }, [answers, course, dispatch]);

    return answers;
};

export default useStudentAnswers;
