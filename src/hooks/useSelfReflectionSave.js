import {useDispatch, useSelector} from "react-redux";

let style = '';

const post = async (answer) => {
    const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/saveAnswer`;
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
            cause: error
        });
    }
};

const useSelfReflectionSave = () => {
    const dispatch = useDispatch();
    const answer  = useSelector((state) => state.student.answer);
    /*const findValue = (arr, field) => {
        if (arr instanceof Array) {
            return arr?.find(
                o => {
                    if (o?.[field]?.length > 0) return o
                });
        }
        return arr[field];
    }*/

    const addAnswer = async (record) => {
        const addedRecord = await post(record);
        //let message = findValue(addedRecord, "message");
        dispatch({type: 'SET_STUDENT_ANSWER', payload: addedRecord});
        /*setTimeout(() => {
            dispatch({ type: 'HIDE_ADD_NOTIFICATION' });
        }, 3000);*/
        return addedRecord.assignment_id;
    }

    return [answer, null, style, addAnswer];
};

export default useSelfReflectionSave;
