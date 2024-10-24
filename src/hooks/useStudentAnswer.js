/*import useUser from "./useUser";
import {useGET} from "./useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import user from "../components/header/User";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: 'A1234',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentAnswer = (assignmentId, userId, feedbackEvaluationPage) => {
    const [user] = useUser();
    emptyAnswer.user_name = user.eppn;
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.student.answer);

    const [response, error] = useGET({
        path: `/api/student/answer/${assignmentId}/${user.eppn}`
    });

    useEffect(() => {
        if (response !== answer) {
            dispatch({
                type: 'GET_STUDENT_ANSWER',
                payload: response
            });
        }
    }, [response]);

    if (!feedbackEvaluationPage && (!answer || answer.length === 0 || error)) {
        return emptyAnswer;
    }

    return answer;
};

export default useStudentAnswer;
*/