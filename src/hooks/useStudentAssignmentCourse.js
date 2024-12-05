import useUser from './useUser';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    title: '',
    topic: '',
    value: '',
    order_nbr: '',
};
const useStudentAssignmentCourse = (assignmentId) => {
    const [user] = useUser();
    emptyAnswer.user_name = user.eppn;

    const dispatch = useDispatch();
    const [assignment_course, setAssignment_course] = useState(null);

    const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

    const get = async () => {
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/assignment/course/${assignmentId}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching all courses from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!assignment_course) {
            (async () => {
                setAssignment_course(await get());
            })();
        }
    }, [assignment_course, dispatch]);

    if (assignment_course) {
        emptyAnswer.topic = assignment_course.topic;
        emptyAnswer.title = assignment_course.title;
        emptyAnswer.course_id = assignment_course.course_id;
        emptyAnswer.assignment_id = assignmentId;
        emptyAnswer.id = assignment_course.id;
        return emptyAnswer;
    }

    return emptyAnswer;
};

export default useStudentAssignmentCourse;
