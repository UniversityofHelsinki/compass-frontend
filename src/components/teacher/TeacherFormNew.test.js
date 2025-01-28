import React from 'react';
import { mockFetch } from '../../test/mockFetch';
import { mockRouter } from '../../test/reactRouter';
import { act, render, screen } from '../../test/render';
import TeacherFormNew from './TeacherFormNew';

const useParams = {
    course: 123,
};
jest.mock('react-router-dom', () => mockRouter({ useParams }));

describe('TeacherFormNew', () => {
    test('renders', () => {
        render(<TeacherFormNew />);
    });

    test('Without ID empty form is rendered', async () => {
        useParams.course = null;
        const component = render(<TeacherFormNew />);
        const title = screen.getByLabelText('teacher_form_title');
        expect(title.value).toStrictEqual('');
    });

    test('With ID a course is used as a template', async () => {
        useParams.course = 123;
        const component = render(
            <TeacherFormNew />,
            {},
            {
                teacher: {
                    course: {
                        id: 123,
                        title: 'AAAAA',
                        assignments: [],
                    },
                },
            },
        );
        const title = screen.getByLabelText('teacher_form_title');
        expect(title.value).toStrictEqual('AAAAA');
    });

    test('Save button is disabled on empty form', async () => {
        const component = render(
            <div>
                <TeacherFormNew />
            </div>,
            {},
            {
                teacher: {
                    course: {
                        id: 123,
                        title: 'AAAAA',
                        assignments: [],
                    },
                },
            },
        );
        const saveButton = screen.getByRole('button', { name: 'teacher_form_save_button' });
        expect(saveButton).toBeDisabled();
    });

    test('On save notification of success is shown', async () => {
        const fetchMock = mockFetch();
        fetchMock.addPath('/api/teacher/courses', {
            body: undefined,
            status: 200,
            method: 'POST',
        });
        window.fetch = fetchMock.build();
        useParams.course = 123;
        const component = render(
            <div>
                <TeacherFormNew />
            </div>,
            {},
            {
                teacher: {
                    course: {
                        id: 123,
                        title: 'AAAAA',
                        assignments: [],
                    },
                },
            },
        );
        const saveButton = screen.getByRole('button', { name: 'teacher_form_save_button' });
        const courseId = screen.getByLabelText('teacher_form_course_id');
        const startDate = screen.getByLabelText('teacher_form_start_date');
        const endDate = screen.getByLabelText('teacher_form_end_date');
        await component.user.type(courseId, 'A-123');
        await component.user.type(startDate, '27.1.2023');
        await component.user.type(endDate, '27.1.2024');
        await component.user.click(saveButton);
        const notification = screen.getByText('teacher_form_new_saved_notification_success');
        expect(notification).toBeInTheDocument();
    });

    test('On save notification is shown on error', async () => {
        const fetchMock = mockFetch();
        const reason = 'invalid_request';
        fetchMock.addPath('/api/teacher/courses', {
            body: { reason },
            status: 500,
            method: 'POST',
        });
        fetchMock.addPath('/api/teacher/courses/123', {
            body: {
                id: 123,
                title: 'AAAAA',
                assignments: [],
            },
            status: 200,
            method: 'GET',
        });
        window.fetch = fetchMock.build();
        useParams.course = 123;
        const component = render(
            <div>
                <TeacherFormNew />
            </div>,
            {},
            {
                teacher: {
                    course: {
                        id: 123,
                        title: 'AAAAA',
                        assignments: [],
                    },
                },
            },
        );
        const saveButton = screen.getByRole('button', { name: 'teacher_form_save_button' });
        const courseId = screen.getByLabelText('teacher_form_course_id');
        const startDate = screen.getByLabelText('teacher_form_start_date');
        const endDate = screen.getByLabelText('teacher_form_end_date');
        await component.user.type(courseId, 'A-123');
        await component.user.type(startDate, '27.1.2023');
        await component.user.type(endDate, '27.1.2024');
        await component.user.click(saveButton);
        const notification = await screen.findByText(reason);
        expect(notification).toBeInTheDocument();
    });
});
