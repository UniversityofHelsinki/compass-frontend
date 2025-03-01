const coursesReducer = (state = { loadingUsers: false }, action) => {
    switch (action.type) {
        case 'SET_ALL_COURSES':
            return { ...state, allCourses: action.payload };
        case 'SET_COURSE':
            return { ...state, clickedCourse: action.payload };
        case 'SET_COURSE_STATISTICS':
            return {
                ...state,
                statistics: action.payload,
            };
        default:
            return state;
    }
};

export default coursesReducer;
