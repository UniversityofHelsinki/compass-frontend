import React from 'react';
import { mockFetch } from '../../test/mockFetch';
import { screen, render, act, waitFor } from '../../test/render';
import TeacherForms from './TeacherForms';

const fetchMock = mockFetch();
beforeEach(() => {
    fetchMock.addPath('/api/teacher/courses', { body: [], status: 200 });
    window.fetch = fetchMock.build();
});

it('renders', () => {
    render(<TeacherForms />);
});

describe('TeacherForms', () => {
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

    test.only('Table is sorted by course name on name header button press', async () => {
        let component;
        await act(async () => {
            component = render(
                <TeacherForms />,
                {},
                {
                    teacher: {
                        courses: [
                            {
                                title: 'BBBB',
                                course_id: 'REE',
                                start_date: new Date().toISOString(),
                                end_date: new Date().toISOString(),
                            },
                            {
                                title: 'AAAA',
                                course_id: 'REE',
                                start_date: new Date().toISOString(),
                                end_date: new Date().toISOString(),
                            },
                        ],
                    },
                },
            );
        });

        const firstCellBeforeSort = component.getAllByRole('cell')[0];
        expect(firstCellBeforeSort.textContent).toEqual('BBBB');

        const sortButton = component.getByRole('button', {
            name: 'teacher_forms_table_title',
        });
        expect(sortButton).toBeInTheDocument();

        await act(async () => {
            await component.user.click(sortButton);
        });

        const firstCellAfterSort = component.getAllByRole('cell')[0];
        expect(firstCellAfterSort.textContent).toEqual('AAAA');
    });
});
