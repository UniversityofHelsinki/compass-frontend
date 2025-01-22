import React from 'react';
import { render, screen } from '../../test/render.js';
import Teacher from './Teacher';

it('renders', () => {
    render(<Teacher />);
});

describe('Teacher', () => {
    test('Throws error if user is not a teacher', () => {
        const component = render(
            <Teacher />,
            {
                onCaughtError: () => {
                    console.log('moi');
                },
                onRecoverableError: () => {
                    console.log('heihei');
                },
            },
            {
                users: {
                    user: {
                        eppn: 'baabenom',
                        hyGroupCn: ['hy-employees', 'hyad-employees'],
                        preferredLanguage: '',
                        displayName: 'Baabe Nomypeevo',
                        eduPersonAffiliation: ['student'],
                    },
                },
            },
        );
        expect(
            screen.getByText('Permission denied for user', { exact: false }),
        ).toBeInTheDocument();
    });
});
