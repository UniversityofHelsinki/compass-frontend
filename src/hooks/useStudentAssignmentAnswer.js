import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import useStudentAssignmentCourse from './useStudentAssignmentCourse';

let emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    answer_value: '',
    order_nbr: '',
};

const useStudentAssignmentAnswer = (assignmentId) => {
    emptyAnswer.assignment_id = assignmentId;
    const dispatch = useDispatch();
    const studentAnswerData = useStudentAssignmentCourse(assignmentId);
    useEffect(() => {
        if (!answer) {
            (async () => {
                dispatch({ type: 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER', payload: await get() });
            })();
        }
    }, [studentAnswerData, assignmentId, dispatch]);

    const [answer, setAnswer] = useState(null);

    const get = async () => {
        if (studentAnswerData.course_id.length > 0) {
            const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
            const URL = `${COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${assignmentId}/${studentAnswerData.course_id}`;
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    return await response.json();
                }
                throw new Error(
                    `Unexpected status code ${response.status} while fetching student course assignment answer from ${URL}`,
                );
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    useEffect(() => {
        if (!answer || answer.assignment_id !== parseInt(assignmentId)) {
            (async () => {
                setAnswer(await get());
            })();
        }
    }, [studentAnswerData, studentAnswerData.course_id, answer, assignmentId, dispatch]);

    if (!answer || answer.length === 0) {
        return [studentAnswerData, emptyAnswer];
    }
    return [studentAnswerData, answer];
};

export default useStudentAssignmentAnswer;
