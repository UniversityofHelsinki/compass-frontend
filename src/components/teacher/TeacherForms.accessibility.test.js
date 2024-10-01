import { screen, render } from '../../test/render.js';
import TeacherForms from "./TeacherForms.js";
import React from "react";
import { axe } from "jest-axe";

describe('TeacherForms', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <TeacherForms />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
