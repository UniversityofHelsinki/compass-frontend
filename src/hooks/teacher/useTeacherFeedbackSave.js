import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
//import useTeacherFeedback from "./useTeacherFeedback";
//import useUser from "../useUser";

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
let style = '';
let message = '';

const post = async (feedback) => {
    const URL = `${COMPASS_BACKEND_SERVER}/api/saveFeedback`;
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(feedback),
        });
        if (response.status === 200) {
            style = 'neutral';
            message = 'student_feedback_message';
            return await response.json();
        } else if (response.status === 500) {
            style = 'warning';
            message = 'student_feedback_err_message';
            return await response.json();
        }
    } catch (error) {
        console.error(error);
        throw new Error('error_feedback_add', {
            cause: error,
        });
    }
};

const useTeacherFeedbackSave = (course_id, assignment_id, feedback_value, feedback_order_nbr) => {
    //const [feedback_from_database] = useTeacherFeedback(course_id, assignment_id);
    const [feedback, setFeedback] = useState({
        value: feedback_value,
        order_nbr: feedback_order_nbr,
    });
    const [radioButtonClicked, setRadioButtonClicked] = useState(false);
    const dispatch = useDispatch();
    const storedFeedback = useSelector((state) => state.student.feedback);
    const onChange = (what, value) => {
        if (what && what === 'order_nbr') setRadioButtonClicked(true);

        const newModifiedObject = {
            ...feedback,
            [what]: value,
        };
        setFeedback(newModifiedObject);
    };
    const addFeedback = async (userName, course_id, assignment_id, feedbackId) => {
        const addedFeedback = await post({
            ...feedback,
            user_name: userName,
            course_id: course_id,
            assignment_id: assignment_id,
            id: feedbackId,
        });
        dispatch({ type: 'SET_STUDENT_FEEDBACK', payload: addedFeedback });
        //return addedFeedback;
    };

    /*if (feedback_from_database && !feedback) {
        setFeedback(feedback_from_database);
        setRadioButtonClicked(true);
    }*/
    if (feedback && !radioButtonClicked) {
        setRadioButtonClicked(true);
    }

    const saveDisabled = () => {
        return (
            ((feedback?.value === undefined ||
                feedback?.value === null ||
                feedback?.value.length === 0 ||
                feedback?.order_nbr === undefined ||
                feedback?.order_nbr === null) &&
                (feedback_value === undefined ||
                    feedback_value === null ||
                    feedback_value.length === 0 ||
                    feedback_order_nbr === undefined ||
                    feedback_order_nbr === null)) ||
            (feedback?.value === feedback_value && feedback?.order_nbr === feedback_order_nbr)
        );
    };

    const resetValues = () => {
        setRadioButtonClicked(false);
        setFeedback('');
        message = '';
        style = '';
    };

    return [
        storedFeedback,
        feedback,
        style,
        addFeedback,
        onChange,
        radioButtonClicked,
        message,
        resetValues,
        saveDisabled,
    ];
};

export default useTeacherFeedbackSave;
