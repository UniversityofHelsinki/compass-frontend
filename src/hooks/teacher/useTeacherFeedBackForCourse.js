import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTeacherFeedbackForCourse = (course_id) => {
    const [feedback, setFeedback] = useState(null);
    const dispatch = useDispatch();

    const readFeedback = !(course_id === undefined || course_id === null);
    const get = async (course_id) => {
        if (readFeedback) {
            const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
            const URL = `${COMPASS_BACKEND_SERVER}/api/student/feedbackForCourse/${course_id}`;
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    useEffect(() => {
        if (feedback === undefined || feedback === null) {
            (async () => {
                setFeedback(await get(course_id));
            })();
        }
    }, [feedback, course_id, dispatch]);

    return [feedback];
};

export default useTeacherFeedbackForCourse;
