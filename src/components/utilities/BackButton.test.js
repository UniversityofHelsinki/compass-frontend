import React from 'react';
import { render, screen } from '../../test/render.js'
import BackButton from './BackButton';

test('renders', () => {
  render(
    <BackButton 
      labels={{
        primary: 'teacher_forms',
        secondary: 'back to teacher forms'
      }}
    />
  );
});

let backButton;
beforeEach(() => {
  backButton = render(
    <BackButton 
      labels={{ 
        primary: 'teacher_forms', 
        secondary: 'back to teacher forms' 
      }}
      href="/teacher/forms"
    />
  );
});

describe('back button labels', () => {

  test('primary label is shown', () => {
    expect(screen.queryByRole('link')).toHaveTextContent('teacher_forms');
  });

  test('secondary label is shown', () => {
    expect(screen.queryByRole('link')).toHaveTextContent('back to teacher forms');
  });

});

test('back button destination is set', () => {
  expect(screen.queryByRole('link').hasAttribute('href')).toBeTruthy();
});
