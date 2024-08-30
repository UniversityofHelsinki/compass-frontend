import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';
import userReducer from "./userReducer";

const reducers = {
    users: userReducer,
    courses: coursesReducer,
};

export default combineReducers(reducers);
