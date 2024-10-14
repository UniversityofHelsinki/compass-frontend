const teacherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TEACHER_COURSES':
      return { ...state, courses: action.payload }
    default:
      return state;
  }
};

export default teacherReducer;

