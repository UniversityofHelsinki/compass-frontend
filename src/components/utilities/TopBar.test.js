import React from 'react';
import { render, screen } from '../../test/render.js';
import TopBar from './TopBar.js';

export const props = {
  showBackBtn: false,
  backBtnLabels: {
    primary: 'back to front',
      secondary: 'aaaaaaaaaaa'
  },
  backBtnHref: '/teacher',
  heading: "Forms"
};

it('renders', () => {
  render(
    <TopBar { ...props } />
  );
});

let topBar;
beforeEach(() => {
  topBar = render(
    <TopBar { ...props }/>
  );
});

describe('Top Bar', () => {
  test('Shows the heading given', () => {
    expect(screen.queryByRole('heading')).toBeTruthy();
  });

  test('Renders back button if defined', () => {
    const t = render(
      <TopBar { ...props } showBackBtn={true} />
    );
    expect(screen.queryByRole('link')).toHaveTextContent('back to front');
  });
});
