import React from 'react';
import { render } from '../../test/render.js';
import Header from './Header';

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
      <Header />
    );
});
