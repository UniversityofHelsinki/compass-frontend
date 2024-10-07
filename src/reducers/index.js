import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import selfReflectionReducer from "./selfReflectionReducer";
import studentReducer from './studentReducer';
import answersReducer from "./answersReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    addedAnswer: selfReflectionReducer,
    student: studentReducer,
    addedAnswer: answersReducer
};

export default combineReducers(reducers);
