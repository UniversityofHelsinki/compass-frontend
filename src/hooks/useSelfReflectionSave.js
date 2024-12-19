import { useDispatch, useSelector } from 'react-redux';
import { invalidate } from './useHttp';

let style = '';

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

const post = async (answer) => {
    const URL = `${COMPASS_BACKEND_SERVER}/api/saveAnswer`;
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(answer),
        });
        if (response.status === 200) {
            style = 'neutral';
            return await response.json();
        } else if (response.status === 500) {
            style = 'warning';
            return await response.json();
        }
    } catch (error) {
        console.error(error);
        throw new Error('error_record_add', {
            cause: error,
        });
    }
};

const useSelfReflectionSave = () => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.student.answer);

    const addAnswer = async (record) => {
        const addedRecord = await post(record);
        dispatch({ type: 'SET_STUDENT_ANSWER', payload: addedRecord });
        invalidate(['signatures']);
        return addedRecord.assignment_id;
    };

    return [answer, null, style, addAnswer];
};

export default useSelfReflectionSave;
