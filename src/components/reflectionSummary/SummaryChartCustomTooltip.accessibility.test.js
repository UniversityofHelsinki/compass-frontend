import { render } from '../../test/render.js';
import React from 'react';
import { axe } from 'jest-axe';
import SummaryChartCustomTooltip from './SummaryChartCustomTooltip';

describe('Summary chart custom tooltip', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(<SummaryChartCustomTooltip />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
