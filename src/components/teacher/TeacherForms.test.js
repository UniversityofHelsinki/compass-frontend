import React from 'react';
import { screen, render } from '../../test/render';
import TeacherForms from './TeacherForms';

it('renders', () => {
    render(<TeacherForms />);
});

test('teacher forms heading is shown', () => {
    render(
        <TeacherForms />,
        {},
        {
            teacher: {
                courses: [],
            },
        },
    );
    expect(screen.queryByRole('heading')).toHaveTextContent('teacher_forms_heading');
});

test('No courses disclaimer is shown', () => {
    render(
        <TeacherForms />,
        {},
        {
            teacher: {
                courses: [],
            },
        },
    );

    expect(document.querySelector('.teacher-forms-no-forms')).toBeDefined();
});

test('Course table is shown when there are courses', () => {
    render(
        <TeacherForms />,
        {},
        {
            teacher: {
                courses: [
                    {
                        title: 'Research Ethics',
                        course_id: 'REE',
                        start_date: new Date().toISOString(),
                        end_date: new Date().toISOString(),
                    },
                ],
            },
        },
    );
    expect(screen.queryByRole('table')).toBeVisible();
    expect(screen.queryByText('Research Ethics')).toBeVisible();
    expect(screen.queryByText('REE')).toBeVisible();
});
