import React from 'react';
import { render, screen } from '../../test/render.js';
import StudentsInCourseList from './StudentsInCourseList';

it('renders', () => {
    render(<StudentsInCourseList />);
});
