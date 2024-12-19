import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';

const useStudentAssignments = ({ course }) => {
    const dispatch = useDispatch();
    /*const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/courses/${course}/assignments`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student assignments from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };*/
    const assignments = useSelector((state) => state.student.assignments);

    const [response, error, reload] = useGET({
        path: `/api/student/courses/${course}/assignments`,
        tag: `COURSE_STATISTICS_OR_ASSIGNMENTS_${course}`,
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
