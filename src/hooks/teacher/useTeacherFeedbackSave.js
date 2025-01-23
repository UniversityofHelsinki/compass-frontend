import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { usePOST_DATA } from '../useHttp';
import useUser from '../useUser';

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';
let style = '';
let message = '';

const useTeacherFeedbackSave = (
    id,
    course_id,
    assignment_id,
    feedback_value,
    feedback_order_nbr,
) => {
    const [feedback, setFeedback] = useState(null);
    const post = usePOST_DATA({
        path: `/api/saveFeedback`,
        invalidates: [`COURSE_STATISTICS_OR_ASSIGNMENTS_${id}`],
    });
    useEffect(() => {
        if (feedback === null)
            setFeedback({ feedback_value: feedback_value, order_nbr: feedback_order_nbr });
    }, [feedback]); // re-run the effect when 'count' changes

    if (feedback === null)
        setFeedback({ feedback_value: feedback_value, order_nbr: feedback_order_nbr });

    const [user] = useUser();
    const [radioButtonClicked, setRadioButtonClicked] = useState(false);
    const dispatch = useDispatch();
    const storedFeedback = useSelector((state) => state.student.feedback);
    const setFeedbackvalues = (feedback_value, feedback_order_nbr) => {
        setFeedback({ feedback_value: feedback_value, order_nbr: feedback_order_nbr });
    };
    const onChange = (what, value) => {
        if (what && what === 'order_nbr') setRadioButtonClicked(true);

        const newModifiedObject = {
            ...feedback,
            [what]: value,
        };
        setFeedback(newModifiedObject);
    };
    const addFeedback = async (userName, course_id, assignment_id, feedback_id) => {
        const addedFeedback = await post({
            ...feedback,
            user_name: user.eppn,
            course_id: course_id,
            assignment_id: assignment_id,
            id: feedback_id,
            student: userName,
        });
        if ((addedFeedback.status = 200)) {
            style = 'neutral';
            if (addedFeedback.message) {
                message = addedFeedback.message;
            } else {
                message = 'student_feedback_message';
            }
        } else if (addedFeedback.status === 500) {
            style = 'warning';
            message = 'student_feedback_err_message';
        }
        dispatch({ type: 'SET_STUDENT_FEEDBACK', payload: addedFeedback });
    };

    if (feedback && !radioButtonClicked) {
        setRadioButtonClicked(true);
    }

    const saveDisabled = () => {
        return (
            ((feedback?.feedback_value === undefined ||
                feedback?.feedback_value === null ||
                feedback?.feedback_value.length === 0) &&
                (feedback?.order_nbr === undefined || feedback?.order_nbr === null) &&
                (feedback_value === undefined ||
                    feedback_value === null ||
                    feedback_value.length === 0) &&
                (feedback_order_nbr === undefined || feedback_order_nbr === null)) ||
            (feedback?.feedback_value === feedback_value &&
                feedback?.order_nbr === feedback_order_nbr)
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
        setFeedbackvalues,
    ];
};

export default useTeacherFeedbackSave;
