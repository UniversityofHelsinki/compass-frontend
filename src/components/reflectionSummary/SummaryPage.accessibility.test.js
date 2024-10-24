import { render } from "../../test/render.js";
import SummaryPage from "./SummaryTable";
import React from "react";
import { axe } from "jest-axe";

describe('Summary chart', () => {
    it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <SummaryPage />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
