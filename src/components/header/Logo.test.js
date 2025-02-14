import React from 'react';
import { mockFetch } from '../../test/mockFetch.js';
import { act, render, screen } from '../../test/render.js';
import Logo from './Logo';

describe('Logo', () => {
    describe.each([
        [true, '/teacher/forms'],
        [false, '/student/courses'],
    ])('Link', (isTeacher, path) => {
        test('points to correct destination', async () => {
            await act(async () => {
                render(<Logo isTeacher={isTeacher} />);
            });

            const logo = await screen.findByText('reflection_compass_hy_logo');
            expect(logo.parentElement).toBeDefined();
            expect(logo.parentElement.getAttribute('href')).toEqual(path);
        });
    });
});
