import TeacherForm from "./TeacherForm.js";
import React from "react";
import { axe } from "jest-axe";
import { render } from "../../test/render.js";

describe('TeacherForm', () => {
  it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <TeacherForm onSave={() => {}} teacherForm={{}} />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
  });
});
