import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { MockProvider } from '../../reducers/MockProvider';

const reducers = {
    users: {
        user: {
            displayName: 'baabenom',
            eppn: 'moro'
        }
    }
}

it('renders', () => {
    render(
        <MockProvider mockReducers={reducers}>
            <Header />
        </MockProvider>
    );
});
