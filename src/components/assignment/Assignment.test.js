import React from 'react';
import { render, screen } from '../../test/render.js';
import Assignment from './Assignment';

const LEVELS = [
    {
        label: 'option_one',
        value: '0',
    },
    {
        label: 'option_two',
        value: '1',
    },
    {
        label: 'option_three',
        value: '2',
    },
    {
        label: 'option_four',
        value: '3',
    },
    {
        label: 'option_five',
        value: '4',
    },
];
it('renders', () => {
    render(<Assignment levels={[LEVELS]} />);
    screen.debug();
});

describe('renders', () => {
    let component;
    beforeEach(() => {
        component = render(<Assignment levels={LEVELS} />);
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
