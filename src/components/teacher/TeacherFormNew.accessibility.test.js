import TeacherFormNew from "./TeacherFormNew.js";
import React from "react";
import { axe } from "jest-axe";
import { render } from "../../test/render.js";

describe('TeacherFormNew', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <TeacherFormNew />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
