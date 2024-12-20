import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unstable_HistoryRouter } from 'react-router-dom';
//import { useGET } from '../useHttp';

const useTeacherFeedback = (course_id, assignmentId) => {
    /*const [response, error] = useGET({
        path: `/api/student/feedback/${course_id}/${assignmentId}`,
        tag: 'STUDENT_FEEDBACK',
    });*/
    const [feedback, setFeedback] = useState(null);
    const dispatch = useDispatch();
    //const feedback = useSelector((state) => state.student.student_feedback);

    const readFeedback = !(
        course_id === undefined ||
        course_id === null ||
        assignmentId === undefined ||
        assignmentId === null
    );
    const get = async (course_id, assignmentId) => {
        if (readFeedback) {
            const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
            const URL = `${COMPASS_BACKEND_SERVER}/api/student/feedback/${course_id}/${assignmentId}`;
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
            /*dispatch({
                type: 'GET_STUDENT_FEEDBACK',
                payload: get(course_id, assignmentId),
            });*/
            (async () => {
                setFeedback(await get(course_id, assignmentId));
            })();
        }
    }, [feedback, course_id, assignmentId, dispatch]);

    return [feedback];
};

export default useTeacherFeedback;
