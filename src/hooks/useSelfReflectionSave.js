import {useDispatch, useSelector} from "react-redux";

const post = async (answer) => {
    const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/saveanswer`;
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(answer),
        });
        if (response.status === 200) {
            return await response.json();
        } else if (response.status === 500) {
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
    const { answer, message }  = useSelector((state) => state.addedAnswer);

    const findValue = (arr, field) => {
        return arr?.find(
            o => { if (o?.[field]?.length > 0) return o });
    }

    const addAnswer = async (record) => {
        const addedRecord = await post(record);
        let message = findValue(addedRecord, "message");
        dispatch({type: 'ADD_ANSWER', payload: addedRecord, responseMessage: message});
        setTimeout(() => {
            dispatch({ type: 'HIDE_ADD_NOTIFICATION' });
        }, 3000);
    }

    return [answer, message, addAnswer];
};

export default useSelfReflectionSave;
