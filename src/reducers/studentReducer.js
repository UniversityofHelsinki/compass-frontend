
const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDENT_COURSES':
      return { ...state, courses: action.payload };
    case 'SET_STUDENT_ANSWER':
      return { ...state, answer: action.payload };
    case 'GET_STUDENT_ANSWER':
      return { ...state, answerXXXXX: action.payload };
    case 'GET_STUDENT_COURSE':
      return { ...state, course: action.payload };
    case 'GET_STUDENT_ASSIGNMENT_COURSE':
      return { ...state, assignment_course: action.payload };
    case 'GET_STUDENT_COURSE_ASSIGNMENT_ANSWER':
      return { ...state, course_assignment_answer: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
