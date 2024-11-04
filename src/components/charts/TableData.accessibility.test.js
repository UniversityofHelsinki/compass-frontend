import { render } from '../../test/render';
import PieCharts from './PieChart';
import { axe } from 'jest-axe';
import React from 'react';
import TableData from './TableData';

describe('Table data', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(<TableData />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
