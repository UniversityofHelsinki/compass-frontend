import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import compassReducer from '.';
import PropTypes from 'prop-types';

const mockCourses =  [{
        value: "eka",
        label: "Kurssi1"
    },
    {
        value: "toka",
        label: "Kurssi2",
    },
    {
        value: "kolmas",
        label: "Kurssi3",
    }];

const mockUser = {
    eppn: 'baabenom',
    hyGroupCn: ['hy-employees', 'hyad-employees'],
    preferredLanguage: '',
    displayName: 'Baabe Nomypeevo'
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

const defaultMockReducers = {
    location: {
        path: '/',
    },

    courses: {
        allCourses: mockCourses
    },
    users: {
        user: mockUser
    },
    userCourseAnswers: {
        userCourseAnswers: [mockUserCourseAnswer]
    }
};

export const MockProvider = ({ children, mockReducers }) => {
    return (
        <Provider store={createStore(() => ({ ...compassReducer, ...defaultMockReducers, ...mockReducers }), applyMiddleware(thunk))}>
            {children}
        </Provider>
    );
};

MockProvider.propTypes = {
    children: PropTypes.object.isRequired,
    mockReducers: PropTypes.object,
};
