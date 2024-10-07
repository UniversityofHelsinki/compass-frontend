import { render } from './../../test/render.js';
import TopBar from "./TopBar.js";
import React from "react";
import { axe } from "jest-axe";
import { props } from './TopBar.test.js';

describe('TopBar', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <TopBar { ...props } />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
