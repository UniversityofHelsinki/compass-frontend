import React from 'react';
import CourseList from './CourseList';
import Course from './Course';
import { render } from '../test/render';

const course = {
    title: 'Otsikko',
    description: 'Kuvaus',
};
it('renders', () => {
    render(<Course course={course} />);
});
