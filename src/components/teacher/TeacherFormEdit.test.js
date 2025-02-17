import React from 'react';
import { mockFetch } from '../../test/mockFetch';
import { mockRouter } from '../../test/reactRouter';
import { act, cleanup, render, screen } from '../../test/render';
import TeacherFormEdit from './TeacherFormEdit.js';

jest.mock('react-router-dom', () => mockRouter({ useParams: { course: 123 } }));

const teacherForm = {
    assignments: [],
    course_id: 'AAAEEE',
    created: '2024-10-10T04:31:00.819Z',
    description: 'AAAAAA',
    end_date: '2025-04-14T00:00:00.000Z',
    id: 123,
    start_date: '2025-01-11T00:00:00.000Z',
    title: 'Opiskelijan digitaidot kevät 2025',
    user_name: 'baabenom',
};

const fetchMock = mockFetch();
fetchMock.addPath('/api/teacher/courses', { method: 'PUT', body: {}, status: 200 });
fetchMock.addPath('/api/teacher/courses/123', { method: 'GET', body: teacherForm, status: 200 });

beforeEach(() => {
    window.fetch = fetchMock.build();
});

describe('TeacherFormEdit', () => {
    it('renders', async () => {
        await act(async () => {
            render(<TeacherFormEdit />);
        });
    });

    describe('Notifications', () => {
        let component;
        beforeEach(async () => {
            await act(async () => {
                component = render(
                    <div>
                        <TeacherFormEdit />
                    </div>,
                    {},
                    {
                        teacher: {
                            course: teacherForm,
                        },
                    },
                );
            });
        });

        test('Success notification', async () => {
            const saveButton = component.getByRole('button', { name: 'teacher_form_save_button' });
            expect(saveButton).toBeInTheDocument();
            const title = component.getByLabelText('teacher_form_title');
            const researchPermissionRadioBtn = component.getByRole('radio', {
                name: 'teacher_form_research_authorization_allowed',
            });
            await component.user.click(researchPermissionRadioBtn);
            await component.user.type(title, 'A');
            await component.user.click(saveButton);
            const notification = await screen.findByText(
                'teacher_form_edit_saved_notification_success',
            );
            expect(notification).toBeInTheDocument();
        });

        test('Failure notification', async () => {
            fetchMock.addPath('/api/teacher/courses', {
                method: 'PUT',
                body: { reason: 'invalid_request' },
                status: 500,
            });
            const saveButton = component.getByRole('button', { name: 'teacher_form_save_button' });
            expect(saveButton).toBeInTheDocument();
            const title = component.getByLabelText('teacher_form_title');
            const researchPermissionRadioBtn = component.getByRole('radio', {
                name: 'teacher_form_research_authorization_allowed',
            });
            await component.user.click(researchPermissionRadioBtn);
            await component.user.type(title, 'A');
            await component.user.click(saveButton);
            const notification = await screen.findByText(
                'teacher_form_edit_saved_notification_error',
            );
            expect(notification).toBeInTheDocument();
        });
    });
});
