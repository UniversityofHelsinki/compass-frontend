import React from 'react';
import { screen, render } from '../../test/render';
import TeacherForms from './TeacherForms';

it('renders', () => {
  render(
    <TeacherForms />
  );
});

test('teacher forms heading is shown', () => {
  render(
    <TeacherForms />,
    {},
    {
      teacher: {
        courses: []
      }
    }
  );
  expect(screen.queryByRole('heading')).toHaveTextContent('Lomakkeet');
});

test('No courses disclaimer is shown', () => {
  render(
    <TeacherForms />,
    {},
    {
      teacher: {
        courses: []
      }
    }
  );

  expect(document.querySelector('.teacher-forms-no-forms')).toBeDefined();
});
