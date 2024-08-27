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

const defaultMockReducers = {
    location: {
        path: '/',
    },

    courses: {
        allCourses: mockCourses
    },

    visibilities: {
        left: true,
        right: true
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
