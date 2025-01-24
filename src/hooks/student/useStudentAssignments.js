import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useStudentAssignments = ({ course }) => {
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.student.assignments);

    const [response, error, reload] = useGET({
        path: `/api/student/courses/${course}/assignments`,
    });
    useEffect(() => {
        if (response !== assignments) {
            dispatch({
                type: 'SET_STUDENT_ASSIGNMENTS',
                payload: response,
            });
        }
    }, [assignments, response, dispatch]);

    return [assignments || [], error, reload];
};
export default useStudentAssignments;
