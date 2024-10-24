import { render } from "../../test/render.js";
import SummaryChart from "./SummaryChart";
import React from "react";
import { axe } from "jest-axe";

describe('Summary chart', () => {
    it('has no accessibility violations', async () => {
        const { container, rerender } = render(
            <SummaryChart assignments={{}} />
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
