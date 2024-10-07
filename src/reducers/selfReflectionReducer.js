const selfReflectionReducer = (state = {
    answer: null
}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return { ...state, answer: action.payload, message: action.responseMessage };
        case 'HIDE_ADD_NOTIFICATION':
            return { ...state,  message: null };
        default:
            return state;
    }
};

export default selfReflectionReducer;
