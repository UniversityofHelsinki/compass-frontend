import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';
import { MockProvider } from '../reducers/MockProvider';

it('renders', () => {
    render(
        <MockProvider>
            <CourseList />
        </MockProvider>
    );
});
