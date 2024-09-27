import React from 'react';
import { render, screen } from '../../../test/render.js';
import Navigation from './Navigation';


test('renders', () => {
  render(
    <Navigation />
  );
});

test('contains at least two links', () => {
  const component = render(
    <Navigation />
  );

  expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2);
});
