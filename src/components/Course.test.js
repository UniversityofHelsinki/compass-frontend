import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';
import { MockProvider } from '../reducers/MockProvider';
import Course from "./Course";

const course = {
    title: 'Otsikko',
    description: 'Kuvaus'
}
it('renders', () => {
    render(
        <MockProvider>
            <Course course={course} />
        </MockProvider>
    );
});
