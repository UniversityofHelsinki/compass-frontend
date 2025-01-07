import Instructions from './Instructions.js';
import React from 'react';
import { axe } from 'jest-axe';
import { render } from '../../test/render.js';

describe('Instructions', () => {
    it('has no accessibility violations', async () => {
        const { container, rerender } = render(<Instructions />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
