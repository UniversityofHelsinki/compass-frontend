import React from 'react';
import { render, screen } from '../../test/render';
import SummaryPage from "./SummaryPage";

it('renders', () => {
    render(
        <SummaryPage studentAnswers={{}} />
    );
});

