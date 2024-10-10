import TeacherFormsTable from "./TeacherFormsTable.js";
import React from "react";
import { axe } from "jest-axe";
import { render } from "../../test/render.js";

describe('TeacherFormsTable', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <TeacherFormsTable />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
