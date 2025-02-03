import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from '../useHttp';
import { validatePeriod } from '../validation/assignmentPeriodValidation';
import { ASSIGNMENT_OLD, ASSIGNMENT_VALID_FOR_EDIT } from '../../Constants';

const useStudentAssignments = ({ course }) => {
    const dispatch = useDispatch();
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

    const filterValidAssignments = () =>
        assignments
            ?.map((assignment) => {
                return { ...assignment };
            })
            .filter((assignment) => {
                return (
                    validatePeriod(assignment) === ASSIGNMENT_VALID_FOR_EDIT ||
                    validatePeriod(assignment) === ASSIGNMENT_OLD
                );
            });

    const valid_assignments = filterValidAssignments();

    return [valid_assignments || [], error, reload];
};
export default useStudentAssignments;
