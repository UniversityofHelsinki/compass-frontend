import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionalCrisisBanner from './ConditionalCrisisBanner';

it('renders', () => {
    render(
        <ConditionalCrisisBanner />
    );
});

