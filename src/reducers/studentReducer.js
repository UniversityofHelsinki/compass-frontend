const studentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_STUDENT_COURSES':
            return { ...state, courses: action.payload };
        case 'SET_STUDENT_ASSIGNMENTS':
            return { ...state, assignments: action.payload };
        case 'SET_STUDENT_ANSWER':
            return { ...state, answer: action.payload };
        case 'SET_STUDENT_FEEDBACK':
            return { ...state, feedback: action.payload };
        case 'GET_STUDENT_ANSWER':
            return { ...state, answer_found: action.payload };
        case 'GET_STUDENT_COURSE':
            return { ...state, course: action.payload };
        case 'GET_STUDENTS_IN_COURSE':
            return { ...state, students: action.payload };
        case 'GET_USER_COURSE':
            return { ...state, usercourse: action.payload };
        case 'GET_STUDENT_ASSIGNMENT_COURSE':
            return { ...state, assignment_course: action.payload };
        case 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER':
            return { ...state, course_assignment_answer: action.payload };
        case 'GET_STUDENT_FEEDBACK':
            return { ...state, student_feedback: action.payload };
        default:
            return state;
    }
};

export default studentReducer;
