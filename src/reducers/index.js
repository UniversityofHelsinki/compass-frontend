import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import studentReducer from './studentReducer';
import answersReducer from "./answersReducer";
import assignmentsReducer from "./assignmentsReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    student: studentReducer,
    addedAnswer: answersReducer,
    assignments: assignmentsReducer
};

export default combineReducers(reducers);
