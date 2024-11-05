import {useDispatch, useSelector} from "react-redux";

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

const post = async (answer) => {
    const URL = `${COMPASS_BACKEND_SERVER}/api/student/deleteAnswer`;
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(answer),
        });
        if (response.status === 200) {
            return {message: 'assignment_answer_removed', style: 'neutral'};
        } else if (response.status === 500) {
            return {message: 'assignment_answer_remove_failed', style: 'warning'};
        }
    } catch (error) {
        console.error(error);
        throw new Error('error_record_add', {
            cause: error
        });
    }
};

const useStudentAnswerRemove = () => {
    const dispatch = useDispatch();
    const response  = useSelector((state) => state.student.answer);

    const removeAnswer = async (answer) => {
        const resp = await post(answer);
        dispatch({type: 'SET_STUDENT_ANSWER', payload: resp});
        /*setTimeout(() => {
            dispatch({ type: 'HIDE_REMOVE_NOTIFICATION' });
        }, 3000);*/
    }

    return [response, removeAnswer];
};

export default useStudentAnswerRemove;
