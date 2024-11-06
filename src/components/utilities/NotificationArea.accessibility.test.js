import NotificationArea from './NotificationArea.js';
import React from 'react';
import { axe } from 'jest-axe';
import { render } from '../../test/render.js';

describe('NotificationArea', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(<NotificationArea />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
