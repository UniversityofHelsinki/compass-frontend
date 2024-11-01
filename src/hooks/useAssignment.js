import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { validatePeriod } from './validation/assignmentPeriodValidation';

const useAssignment = (assignmentId) => {
    const [assignment, setAssignment] = useState(null);

    const dispatch = useDispatch();

    const get = async () => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/course/assignment/feedback/${assignmentId}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student feedback from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!assignment) {
            (async () => {
                setAssignment(await get());
            })();
        }
    }, [assignment, assignmentId, dispatch]);

    const editable = validatePeriod(assignment);

    return editable;
};

export default useAssignment;
