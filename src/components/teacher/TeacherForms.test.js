import React from 'react';
import { render, screen } from '../../test/render.js';
import TeacherForms from './TeacherForms';

it('renders', () => {
  render(
    <TeacherForms />
  );
});

test('teacher forms heading is shown', () => {
  render(
    <TeacherForms />
  );
  expect(screen.queryByRole('heading')).toHaveTextContent('Lomakkeet');
});
