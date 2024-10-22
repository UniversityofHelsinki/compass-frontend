import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useStudentAssignmentCourse from "./useStudentAssignmentCourse";

const emptyAnswer = {
    id: '',
    assignment_id: 1,
    course_id: '',
    user_name: '',
    value: '',
    order_nbr: '',
};

const useStudentCourseAssignmentAnswer = (course_id) => {
    const dispatch = useDispatch();

    const [answer, setAnswer] = useState(null);

    const get = async (course_id) => {
        if(course_id.length > 0 ) {
            const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/student/course/assignment/answer/${course_id}`;
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    return await response.json();
                }
                throw new Error(`Unexpected status code ${response.status} while fetching student course assignment answer from ${URL}`);
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    useEffect(() => {
        if (!answer) {
            (async () => {
                setAnswer( await get(course_id) );
            })();
        }
    }, [answer, course_id, dispatch]);


    if (!answer || answer.length === 0) {
        return [answer, emptyAnswer];
    }
    return [answer];
};

export default useStudentCourseAssignmentAnswer;
