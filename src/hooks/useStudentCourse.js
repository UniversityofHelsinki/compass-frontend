import useUser from "./useUser";
import {useGET} from "./useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const useStudentCourse = (assignmentId) => {
    const dispatch = useDispatch();
    const course = useSelector((state) => state.student.course);

    const [response, error] = useGET({
        path: `/api/student/course/${assignmentId}`
    });

    useEffect(() => {
        if (response !== course) {
            dispatch({
                type: 'GET_STUDENT_COURSE',
                payload: response
            });
        }
    }, [response]);
    /*if (!feedbackEvaluationPage && (!answer || answer.length === 0 || error)) {
        return emptyAnswer;
    }*/
    return course;
};
export default useStudentCourse;
