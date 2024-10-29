import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useAssignmentAnswers = (assignmentId) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.assignments.answers[assignmentId] || []); // Select specific answers for assignmentId
    const [loading, setLoading] = useState(true);
    const [response, error] = useGET({
        path: `/api/teacher/assignment/${assignmentId}/answers`,
        tag: `ASSIGNMENT_ANSWERS_${assignmentId}`,
    });

    useEffect(() => {
        if (response) {
            console.log('API Response:', response); // Debug line to check response
            dispatch({
                type: 'SET_ASSIGNMENT_ANSWERS',
                assignmentId,
                payload: response,
            });
            console.log(`Dispatched action SET_ASSIGNMENT_ANSWERS for assignment ${assignmentId}`);
            setLoading(false);
        }
        if (error) {
            setLoading(false);
        }
    }, [response, error, dispatch, assignmentId]);

    return { answers, loading, error };
};

export default useAssignmentAnswers;
