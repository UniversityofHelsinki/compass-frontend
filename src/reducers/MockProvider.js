import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import compassReducer from '.';
import PropTypes from 'prop-types';

const mockCourses = [
    {
        value: 'eka',
        label: 'Kurssi1',
    },
    {
        value: 'toka',
        label: 'Kurssi2',
    },
    {
        value: 'kolmas',
        label: 'Kurssi3',
    },
];

const mockUser = {
    eppn: 'baabenom',
    hyGroupCn: ['hy-employees', 'hyad-employees'],
    preferredLanguage: '',
    displayName: 'Baabe Nomypeevo',
};

const mockUserCourseAnswer = {
    id: 1,
    assignment_id: 3,
    course_id: 1234,
    user_name: 'User',
    value: 'Assignment answer',
    order_nbr: 3,
    created: 11111111,
    edited: 22222222,
};

const mockAssignments = {
    id: 1,
    assignment_id: 3,
    course_id: 1234,
    topic: 'Assignment topic',
    start_date: 12121212,
    end_date: 1313131313,
    created: 1111111111,
};

const defaultMockReducers = {
    location: {
        path: '/',
    },

    courses: {
        allCourses: mockCourses,
    },
    users: {
        user: mockUser,
    },
    student: {
        courses: [],
    },
    userCourseAnswers: {
        userCourseAnswers: [mockUserCourseAnswer],
    },
    assignments: {
        assignments: [mockAssignments],
    },
    signatures: {
        signatures: {},
    },
};

export const MockProvider = ({ children, mockReducers }) => {
    return (
        <Provider
            store={createStore(
                () => ({ ...compassReducer, ...defaultMockReducers, ...mockReducers }),
                applyMiddleware(thunk),
            )}
        >
            {children}
        </Provider>
    );
};

MockProvider.propTypes = {
    children: PropTypes.object.isRequired,
    mockReducers: PropTypes.object,
};
