import React from 'react';
import { render, screen } from '../../test/render.js';
import SummaryChart from "./SummaryChart";

it('renders', () => {
    render(
        <SummaryChart assignments={{}}/>
    );
});