import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import selfReflectionReducer from "./selfReflectionReducer";
import studentReducer from './studentReducer';
import teacherReducer from './teacherReducer';

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    addedAnswer: selfReflectionReducer,
    student: studentReducer,
    teacher: teacherReducer
};

export default combineReducers(reducers);
