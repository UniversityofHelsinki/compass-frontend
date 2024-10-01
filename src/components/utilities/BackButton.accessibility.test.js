import { render } from '../../test/render.js';
import BackButton from "./BackButton.js";
import React from "react";
import { axe } from "jest-axe";

describe('BackButton', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <BackButton />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
