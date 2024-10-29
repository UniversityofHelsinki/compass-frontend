const assignmentsReducer = (
    state = {
        assignments: [],
        loading: false,
        error: '',
        answers: [],
    },
    action,
) => {
    switch (action.type) {
        case 'GET_ASSIGNMENTS_REQUEST':
            return { ...state, loading: true };
        case 'GET_ASSIGNMENTS_SUCCESS':
            return { ...state, loading: false, assignments: action.payload, error: '' };
        case 'GET_ASSIGNMENTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'SET_ASSIGNMENT_ANSWERS':
            console.log(
                `Reducer handling SET_ASSIGNMENT_ANSWERS for assignment ${action.assignmentId}`,
            );
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.assignmentId]: action.payload,
                },
            };
        default:
            return state;
    }
};

export default assignmentsReducer;
