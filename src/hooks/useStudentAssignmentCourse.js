import useUser from "./useUser";
import {useGET} from "./useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const useStudentAssignmentCourse = (assignmentId, feedbackEvaluationPage = false) => {
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

    return assignment_course;
};

export default useStudentAssignmentCourse;
