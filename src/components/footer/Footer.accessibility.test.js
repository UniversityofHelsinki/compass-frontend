import { render } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';
import { axe } from 'jest-axe';
import { MockProvider } from '../../reducers/MockProvider';

describe('Footer', () => {
    const reducers = {
        users: {
            user: {
                displayName: 'Keijo Keke',
                eppn: 'keijoke',
                eduPersonAffiliation: 'faculty',
            },
        },
    };

    it('should not have any accessibility violations', async () => {
        const { container } = render(
            <MockProvider mockReducers={reducers}>
                <Footer />
            </MockProvider>,
        );
        const results = await axe(container);

        // use the matcher function in the test
        expect(results).toHaveNoViolations();
    });
});
