import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import selfReflectionReducer from "./selfReflectionReducer";
import studentReducer from './studentReducer';

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    addedAnswer: selfReflectionReducer,
    student: studentReducer,
};

export default combineReducers(reducers);
