import { render } from "../../test/render.js";
import SummaryTable from "./SummaryTable";
import React from "react";
import { axe } from "jest-axe";

describe('Summary chart', () => {
    it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <SummaryTable assignments={{}} />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
