import React from 'react';
import { render } from '@testing-library/react';
import FooterLinks from './FooterLinks';
import { MockProvider } from '../../reducers/MockProvider';
import User from '../header/User';

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
            <FooterLinks />
        </MockProvider>,
    );
});
