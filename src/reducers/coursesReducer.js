
const coursesReducer = (state = { loadingUsers: false }, action) => {
    switch (action.type) {
        case 'SET_ALL_COURSES':
            return { ...state, allCourses: action.payload };
        case 'SET_COURSE':
            return { ...state, clickedCouse: action.payload };
        default:
            return state;
    };
}

export default coursesReducer;
