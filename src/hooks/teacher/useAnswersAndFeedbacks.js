import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useAnswersAndFeedbacks = (assignmentId) => {
    const dispatch = useDispatch();
    const [answerAndFeedbacks, setAnswerAndFeedbacks] = useState();
    /*const answerAndFeedbacks = useSelector((state) => state.anwersAndFeedbacks.answerfeedbacks);
      const [loading, setLoading] = useState(true);

    const [response, error] = useGET({
        path: `/api/teacher/assignment/${assignmentId}/answersAndFeedbacks`,
        tag: `ANSWERS_FEEDBACKS_${assignmentId}`,
    });*/
    const get = async (assignmentId) => {
        if (!answerAndFeedbacks) {
            const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
            const URL = `${COMPASS_BACKEND_SERVER}/api/teacher/assignment/${assignmentId}/answersAndFeedbacks`;
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

    // Effect to handle API response
    /*useEffect(() => {
        if (response) {
            dispatch({
                type: 'SET_ANSWERS_AND_FEEDBACKS',
                payload: response,
            });
            setLoading(false);
        }
        if (error) {
            setLoading(false);
        }
    }, [response, error, dispatch, assignmentId]);*/
    useEffect(() => {
        if (answerAndFeedbacks === undefined || answerAndFeedbacks === null) {
            /*dispatch({
                type: 'GET_STUDENT_FEEDBACK',
                payload: get(course_id, assignmentId),
            });*/
            (async () => {
                setAnswerAndFeedbacks(await get(assignmentId));
            })();
        }
    }, [answerAndFeedbacks, assignmentId, dispatch]);

    return [answerAndFeedbacks];
};

export default useAnswersAndFeedbacks;
