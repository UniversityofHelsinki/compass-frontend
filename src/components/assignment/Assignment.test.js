import React from 'react';
import { render, screen } from '../../test/render.js';
import Assignment from './Assignment';

it('renders', () => {
    render(<Assignment levels={[]} />);
});

describe('renders', () => {
    let component;
    beforeEach(() => {
        component = render(<Assignment levels={[]} />);
    });

    test('top-bar-heading', () => {
        expect(screen.getByText('assignment_answer_back_to_course')).toBeInTheDocument();
    });

    test('form_clear', () => {
        expect(screen.getByText('form_clear')).toBeInTheDocument();
    });

    test('form_submit', () => {
        expect(screen.getByText('form_submit')).toBeInTheDocument();
    });
});
