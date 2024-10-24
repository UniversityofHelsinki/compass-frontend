import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGET} from "../useHttp";

const useStudentAssignments = ({ course }) => {
    const [response] = useGET({
        path: `/api/student/courses/${course}/assignments`,
        tag: 'STUDENT_ASSIGNMENTS'
    });
    const dispatch = useDispatch();

    const assignments = useSelector(state => state.student.assignments);

    useEffect(() => {
        if (response !== assignments) {
            dispatch({
                type: 'SET_STUDENT_ASSIGNMENTS',
                payload: response,
            });
        }
    }, [response]);

    return assignments;
};

export default useStudentAssignments;