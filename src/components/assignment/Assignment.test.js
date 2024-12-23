import React from 'react';
import { render, screen } from '../../test/render.js';
import Assignment from './Assignment';

it('renders', () => {
    render(<Assignment />);
});

describe('renders', () => {
    let component;
    beforeEach(() => {
        component = render(<Assignment />);
    });

    test('top-bar-heading', () => {
        expect(document.querySelector('.top-bar')).toBeInTheDocument();
    });

    test('form_clear', () => {
        expect(screen.getByText('form_clear')).toBeInTheDocument();
    });

    test('form_submit', () => {
        expect(screen.getByText('form_submit')).toBeInTheDocument();
    });
});
