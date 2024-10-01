import React from 'react';
import StudentCourses from './StudentCourses';
import { render, screen } from './../../test/render.js';

it('renders', () => {
  render(
    <StudentCourses />
  );
});

test('student courses heading is shown', () => {
  render(
    <StudentCourses />
  );
  expect(screen.queryByRole('heading')).toHaveTextContent('Kurssit');
});
