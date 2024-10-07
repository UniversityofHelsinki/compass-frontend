import { render } from "../../test/render.js";
import Teacher from "./Teacher.js";
import React from "react";
import { axe } from "jest-axe";

describe('Teacher', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <Teacher />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
