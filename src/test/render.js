import React from 'react';
import { render as testingLibraryRender } from '@testing-library/react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    createMemoryRouter,
} from 'react-router-dom';
import { MockProvider } from './../reducers/MockProvider';
import userEvent from '@testing-library/user-event';
import NotificationProvider from '../NotificationContext';
import { AuthProvider } from '../AuthContext';
import ErrorPage from '../Error';

const router = (ui) =>
    createMemoryRouter(
        createRoutesFromElements(
            <Route path="/" element={ui} errorElement={<ErrorPage />}>
                <Route path="/teacher/forms" element={<span>/teacher/forms</span>} />
            </Route>,
        ),
    );

const Mock = ({ children, mockReducers }) => {
    return (
        <MockProvider mockReducers={mockReducers}>
            <AuthProvider>
                <NotificationProvider>
                    <RouterProvider router={router(children)} />
                </NotificationProvider>
            </AuthProvider>
        </MockProvider>
    );
};

const wrapper = (mockReducers) => {
    return function Component({ children }) {
        return <Mock mockReducers={mockReducers}>{children}</Mock>;
    };
};

const render = (ui, options = {}, mockReducers = {}) => {
    return {
        user: userEvent.setup(),
        ...testingLibraryRender(ui, {
            wrapper: wrapper(mockReducers),
            ...options,
        }),
    };
};

export * from '@testing-library/react';
export { render };
