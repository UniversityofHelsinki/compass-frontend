import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: 'A1234',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentAssignmentAnswer = (assignmentId) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.student.course_assignment_answer);

    const get = async () => {
        const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${assignmentId}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(`Unexpected status code ${response.status} while fetching all courses from ${URL}`);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!answer) {
            (async () => {
                dispatch({ type: 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER', payload: await get() })
            })();
        }
    }, [answer, dispatch]);


    if (!answer || answer.length === 0) {
        return emptyAnswer;
    }
    return answer;
};

export default useStudentAssignmentAnswer;
