import { render } from '../../test/render';
import { axe } from 'jest-axe';
import React from 'react';
import PieCharts from './PieChart';

describe('Pie chart', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(<PieCharts assignments={{}} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
