const answerFeedbackReducer = (
    state = {
        answer: null,
        loading: false,
        error: '',
    },
    action,
) => {
    switch (action.type) {
        case 'SET_ANSWERS_AND_FEEDBACKS':
            return { ...state, answerfeedbacks: action.payload };
        default:
            return state;
    }
};

export default answerFeedbackReducer;
