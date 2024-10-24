import React from 'react';
import { render, screen } from '../../test/render.js';
import SummaryTable from "./SummaryTable";

it('renders', () => {
    render(
        <SummaryTable assignments={{}}/>
    );
});