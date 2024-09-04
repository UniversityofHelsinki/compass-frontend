const selfReflectionReducer = (state = {
    answer: null
}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return { ...state, answer: action.payload, message: action.responseMessage.message };
        default:
            return state;
    }
};

export default selfReflectionReducer;
