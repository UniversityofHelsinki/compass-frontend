import useUser from "./useUser";
import {useGET} from "./useHttp";
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
const useStudentAssignmentCourse = (assignmentId, feedbackEvaluationPage = false) => {
    const [user] = useUser();
    emptyAnswer.user_name = user.eppn;
    const dispatch = useDispatch();
    const assignment_course = useSelector((state) => state.student.assignment_course);

    const [response, error] = useGET({
        path: `/api/student/assignment/course/${assignmentId}`
    });

    useEffect(() => {
        if (response !== assignment_course) {
            dispatch({
                type: 'GET_STUDENT_ASSIGNMENT_COURSE',
                payload: response
            });
        }
    }, [response]);

    /*if (!feedbackEvaluationPage && (!assignment_course || assignment_course.length === 0 || error)) {
        return emptyAnswer;
    }*/
    if (assignment_course) {
        emptyAnswer.topic = assignment_course.topic;
        emptyAnswer.title = assignment_course.title;
        emptyAnswer.course_id = assignment_course.course_id;
        return emptyAnswer;
    }

    return emptyAnswer;
};

export default useStudentAssignmentCourse;
