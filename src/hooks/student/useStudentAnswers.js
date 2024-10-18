import {useGET} from "../useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import useUser from "../useUser";

const useStudentAnswers = ({ course }) => {

    const [user] = useUser();
    const [response, error] = useGET({
        path: `/api/student/courses/${course}/answers`,
        tag: 'STUDENT_ANSWERS'
    });
    const answers = useSelector(state => state.addedAnswer.studentAnswers);
    const dispatch = useDispatch();

    useEffect(() => {
        if (response !== answers) {
            dispatch({
                type: 'SET_STUDENT_ANSWERS',
                payload: response
            });
        }
    }, [response]);

    return answers;

};

export default useStudentAnswers;