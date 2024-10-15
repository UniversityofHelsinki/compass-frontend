import TeacherFormEdit from "./TeacherFormEdit.js";
import React from "react";
import { axe } from "jest-axe";
import { render } from "../../test/render.js";

describe('', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <TeacherFormEdit />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
