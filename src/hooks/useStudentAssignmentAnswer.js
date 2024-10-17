import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useStudentAssignmentCourse from "./useStudentAssignmentCourse";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentAssignmentAnswer = (assignmentId) => {
    const dispatch = useDispatch();
    const studentAnswerData = useStudentAssignmentCourse(assignmentId);
    useEffect(() => {
        if (!answer) {
            (async () => {
                dispatch({ type: 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER', payload: await get() })
            })();
        }
    }, [studentAnswerData, assignmentId, dispatch]);

    const [answer, setAnswer] = useState(null);
    //const answer = useSelector((state) => state.student.course_assignment_answer);

    const get = async () => {
        if(studentAnswerData.course_id.length > 0 ) {
            const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${assignmentId}/${studentAnswerData.course_id}`;
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    return await response.json();
                }
                throw new Error(`Unexpected status code ${response.status} while fetching student course assignment answer from ${URL}`);
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    useEffect(() => {
        if (!answer) {
            (async () => {
                //dispatch({ type: 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER', payload: await get() })
                setAnswer( await get() );
            })();
        }
    }, [studentAnswerData, studentAnswerData.course_id, answer, assignmentId, dispatch]);


    if (!answer || answer.length === 0) {
        return [studentAnswerData, emptyAnswer];
    }
    return [studentAnswerData, answer];
};

export default useStudentAssignmentAnswer;
