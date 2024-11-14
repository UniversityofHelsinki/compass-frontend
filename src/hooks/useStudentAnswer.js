/*import useUser from "./useUser";
import {useGET} from "./useHttp";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import assignments from "../components/assignment/Assignments";
import error from "../Error";


const useStudentAnswer = (dueAssignments, previousAssignments) => {
    const [user] = useUser();
    const dispatch = useDispatch();
    //const answer = useSelector((state) => state.student.answer);
    const [answer, setAnswer] = useState(null);

    let dueAssignmentIds = dueAssignments?.map(o => o.assignment_id);

    const get = async (dueAssignmentIds) => {
        const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
        const URL = `${COMPASS_BACKEND_SERVER}/api/student/answer/${dueAssignmentIds}/${user.eppn}`;
        try {
            const response = await fetch(URL);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(
                `Unexpected status code ${response.status} while fetching student answers from ${URL}`,
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (!answer && dueAssignmentIds) {
            (async () => {
                //dispatch({ type: 'GET_STUDENT_ASSIGNMENT_COURSE', payload: await get() });
                setAnswer(await get(dueAssignmentIds));
            })();
        }
    }, [dueAssignments, answer, dispatch]);
    return [answer];
};

export default useStudentAnswer;*/