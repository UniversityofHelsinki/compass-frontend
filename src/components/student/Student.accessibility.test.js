import { render } from "../../test/render.js";
import Student from "./Student.js";
import React from "react";
import { axe } from "jest-axe";

describe('Student', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <Student />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
