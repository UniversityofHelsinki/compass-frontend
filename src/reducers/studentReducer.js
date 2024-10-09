
const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDENT_COURSES':
      return { ...state, courses: action.payload };
    case 'SET_STUDENT_ASSIGNMENTS':
      return { ...state, assignments: action.payload };
    default:
      return state;
  }
};

export default studentReducer;
