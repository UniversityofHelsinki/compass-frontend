import { render } from '../../test/render.js';
import React from 'react';
import { axe } from 'jest-axe';
import SummaryChartCustomTicks from './SummaryChartCustomTicks';

describe('Summary chart custom ticks', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(<SummaryChartCustomTicks />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
