import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { usePOST } from '../useHttp';

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
    const post = usePOST({
        path: `/api/saveFeedback`,
        invalidates: [`COURSE_STATISTICS_OR_ASSIGNMENTS_${id}`],
    });
    useEffect(() => {
        if (feedback === null)
            setFeedback({ value: feedback_value, order_nbr: feedback_order_nbr });
    }, [feedback]); // re-run the effect when 'count' changes

    if (feedback === null) setFeedback({ value: feedback_value, order_nbr: feedback_order_nbr });

    const [radioButtonClicked, setRadioButtonClicked] = useState(false);
    const dispatch = useDispatch();
    const storedFeedback = useSelector((state) => state.student.feedback);
    const setFeedbackvalues = (feedback_value, feedback_order_nbr) => {
        setFeedback({ value: feedback_value, order_nbr: feedback_order_nbr });
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
            user_name: userName,
            course_id: course_id,
            assignment_id: assignment_id,
            id: feedback_id,
            student: userName,
        });
        if (addedFeedback.ok) {
            style = 'neutral';
            message = 'student_feedback_message';
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
        setFeedbackvalues,
    ];
};

export default useTeacherFeedbackSave;
