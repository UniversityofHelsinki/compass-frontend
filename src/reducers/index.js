import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import answersReducer from "./answersReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    addedAnswer: answersReducer
};

export default combineReducers(reducers);
