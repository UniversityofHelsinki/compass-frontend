const answersReducer = (state = {
    answer: null,
    loading: false,
    error: ''
}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return { ...state, answer: action.payload, error: action.payload };
        case 'GET_ANSWERS_REQUEST':
            return { ...state, loading: true };
        case 'GET_ANSWERS_SUCCESS':
            return { ...state, loading: false, answer: action.payload, error: '' };
        case 'GET_ANSWERS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'SET_STUDENT_ANSWERS':
            return { ...state, studentAnswers: action.payload };
        default:
            return state;
    }
};

export default answersReducer;
