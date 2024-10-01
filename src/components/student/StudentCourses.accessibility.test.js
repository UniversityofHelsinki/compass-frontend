import { render, screen } from '../../test/render.js';
import StudentCourses from "./StudentCourses.js";
import React from "react";
import { axe } from "jest-axe";

describe('StudentCourses', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
          <StudentCourses />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
