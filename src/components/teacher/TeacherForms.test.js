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
