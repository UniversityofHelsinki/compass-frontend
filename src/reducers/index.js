import { combineReducers } from 'redux';

import coursesReducer from './coursesReducer';

const reducers = {
    courses: coursesReducer,
};

export default combineReducers(reducers);
