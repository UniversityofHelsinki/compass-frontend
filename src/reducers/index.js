import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import studentReducer from './studentReducer';
import answersReducer from "./answersReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    student: studentReducer,
    addedAnswer: answersReducer
};

export default combineReducers(reducers);
