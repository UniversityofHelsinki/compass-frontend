const coursesReducer = (state = { loadingUsers: false, statistics: {} }, action) => {
    switch (action.type) {
        case 'SET_ALL_COURSES':
            return { ...state, allCourses: action.payload };
        case 'SET_COURSE':
            return { ...state, clickedCourse: action.payload };
        case 'SET_COURSE_STATISTICS':
            const { courseId, data } = action.payload;
            return {
                ...state,
                statistics: {
                    ...state.statistics,
                    [courseId]: data,
                },
            };
        default:
            return state;
    }
};

export default coursesReducer;
