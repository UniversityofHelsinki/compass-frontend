import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { MockProvider } from '../../reducers/MockProvider';

const reducers = {
    users: {
        user: {
            displayName: 'Keijo Keke',
            eppn: 'keijoke',
            eduPersonAffiliation: 'faculty',
        },
    },
};

it('renders', () => {
    render(
        <MockProvider mockReducers={reducers}>
            <Footer />
        </MockProvider>,
    );
});
