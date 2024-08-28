import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';
import { MockProvider } from '../../reducers/MockProvider';

it('renders', () => {
    render(
        <MockProvider>
            <Logo />
        </MockProvider>
    );
});
