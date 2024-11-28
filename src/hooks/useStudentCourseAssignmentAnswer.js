import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { validatePeriod } from './validation/assignmentPeriodValidation';
import { ASSIGNMENT_OLD, ASSIGNMENT_VALID_FOR_EDIT, COURSE_ONGOING } from '../Constants';

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentCourseAssignmentAnswer = (course_id, signature, id) => {
    const dispatch = useDispatch();
    const [assignments, setAssignments] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [courseDate, setCourseDate] = useState(null);
    //const [previousAssignments, setPreviousAssignments] = useState(null);
    const get = async (course_id) => {
        if (course_id) {
            console.log(signature);
            const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
            const URL = `${COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${course_id}?id=${id}&signature=${signature}`;
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    useEffect(() => {
        if (!assignments && !(course_id === undefined)) {
            (async () => {
                setAssignments(await get(course_id));
            })();
        }
    }, [assignments, course_id, dispatch]);

    if (!assignments || assignments.length === 0) {
        return [assignments, emptyAnswer];
    }
    //
    const newassignments = (due) =>
        assignments
            .map((assignment) => {
                return { ...assignment };
            })
            .filter((assignment) => {
                if (due) {
                    return validatePeriod(assignment) === ASSIGNMENT_VALID_FOR_EDIT;
                } else {
                    return validatePeriod(assignment) === ASSIGNMENT_OLD;
                }
            });

    if (!(assignments[0]?.course_state === COURSE_ONGOING) && errMsg === null) {
        console.log(
            'COURSE_NOT_ONGOING',
            assignments[0]?.course_state,
            assignments[0]?.course_date,
        );
        setErrMsg(assignments[0]?.course_state);
        setCourseDate(assignments[0]?.course_date);
    }
    const due_assignment = newassignments(true);
    const previous_assignment = newassignments(false);

    return [due_assignment, previous_assignment, errMsg, courseDate];
};

export default useStudentCourseAssignmentAnswer;
