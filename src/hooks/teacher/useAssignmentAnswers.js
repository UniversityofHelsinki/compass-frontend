import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useAssignmentAnswers = (assignmentId) => {
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignments);
    const answers = assignments.answers[assignmentId] || [];
    const [loading, setLoading] = useState(true);

    const [response, error] = useGET({
        path: `/api/teacher/assignment/${assignmentId}/answers`,
        tag: `ASSIGNMENT_ANSWERS_${assignmentId}`,
    });

    // Effect to handle API response
    useEffect(() => {
        if (response) {
            dispatch({
                type: 'SET_ASSIGNMENT_ANSWERS',
                assignmentId,
                payload: response,
            });
            setLoading(false);
        }
        if (error) {
            setLoading(false);
        }
    }, [response, error, dispatch, assignmentId]);

    return { answers, loading, error };
};

export default useAssignmentAnswers;
