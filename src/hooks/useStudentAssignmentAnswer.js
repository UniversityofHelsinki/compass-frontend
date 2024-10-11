import {useGET} from "./useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: 'A1234',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentAssignmentAnswer = (assignmentId, feedbackEvaluationPage) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.student.course_assignment_answer);

    const [response, error] = useGET({
        path: `/api/student/course/assignment/answer/${assignmentId}`
    });

    useEffect(() => {
        if (response !== answer) {
            dispatch({
                type: 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER',
                payload: response
            });
        }
    }, [response]);
    if (!feedbackEvaluationPage && (!answer || answer.length === 0 || error)) {
        return emptyAnswer;
    }
    return answer;
};
export default useStudentAssignmentAnswer;
