const teacherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TEACHER_COURSES':
      return { ...state, courses: action.payload };
    case 'SET_TEACHER_COURSE':
      return { ...state, course: action.payload };
    default:
      return state;
  }
};

export default teacherReducer;

