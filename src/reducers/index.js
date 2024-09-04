import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";
import selfReflectionReducer from "./selfReflectionReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
    addedAnswer: selfReflectionReducer
};

export default combineReducers(reducers);
