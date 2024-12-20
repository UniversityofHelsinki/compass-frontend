const signatureReducer = (state = { signatures: {} }, action) => {
    switch (action.type) {
        case 'SET_SIGNATURES':
            return {
                ...state,
                signatures: action.payload,
            };
        default:
            return state;
    }
};

export default signatureReducer;
