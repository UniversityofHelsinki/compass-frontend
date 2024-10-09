const answersReducer = (state = {
}, action) => {
    switch (action.type) {
        case 'GET_ASSIGNMENTS_REQUEST':
            return { ...state, loading: true };
        case 'GET_ASSIGNMENTS_SUCCESS':
            return { ...state, loading: false, answer: action.payload, error: '' };
        case 'GET_ASSIGNMENTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default answersReducer;
