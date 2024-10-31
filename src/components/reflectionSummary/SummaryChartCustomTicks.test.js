import React from 'react';
import { render } from '../../test/render.js';
import SummaryChartCustomTicks from './SummaryChart';

const assignmentsData = {
    assignments: [
        { assignment_id: 1, order_nbr: 3 },
        { assignment_id: 2, order_nbr: 2 },
        { assignment_id: 3, order_nbr: 4 },
        { assignment_id: 4, order_nbr: 1 },
    ],
};

test('renders', () => {
    render(<SummaryChartCustomTicks assignments={[assignmentsData]} />);
});
