import TeacherFormDelete from './TeacherFormDelete.js';
import React from 'react';
import { axe } from 'jest-axe';
import { render, screen } from '../../test/render.js';

describe('TeacherFormDelete', () => {
    it('has no accessibility violations', async () => {
        const { container, rerender } = render(<TeacherFormDelete />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    test('Title is on heading level 2', async () => {
        const component = render(<TeacherFormDelete />, {}, { teacher: { course: {} } });
        const title = component.getByText('Poista kurssi');
        expect(title.tagName).toEqual('H2');
    });
});
