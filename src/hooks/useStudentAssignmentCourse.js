import useUser from "./useUser";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    title: '',
    topic: '',
    value: '',
    order_nbr: ''
};
const useStudentAssignmentCourse = (assignmentId) => {
    const [user] = useUser();
    emptyAnswer.user_name = user.eppn;
    const dispatch = useDispatch();
    const assignment_course = useSelector((state) => state.student.assignment_course);

    const get = async () => {
        const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/student/assignment/course/${assignmentId}`;
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
        if (!assignment_course) {
            (async () => {
                dispatch({ type: 'GET_STUDENT_ASSIGNMENT_COURSE', payload: await get() })
            })();
        }
    }, [assignment_course, dispatch]);

    if (assignment_course) {
        emptyAnswer.topic = assignment_course.topic;
        emptyAnswer.title = assignment_course.title;
        emptyAnswer.course_id = assignment_course.course_id;
        return emptyAnswer;
    }

    return emptyAnswer;
};

export default useStudentAssignmentCourse;
