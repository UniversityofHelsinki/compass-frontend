import React from 'react';
import { mockFetch } from '../../test/mockFetch';
import { mockRouter } from '../../test/reactRouter';
import { render, act, screen } from '../../test/render';
import NotificationArea from '../utilities/NotificationArea';
import TeacherFormDelete from './TeacherFormDelete';

jest.mock('react-router-dom', () => mockRouter({ useParams: { course: 123 } }));

const course = {
    id: 'AAA',
    title: 'AAAA BBBB CCCC',
};

const fetchMock = mockFetch();
const r = (props = {}) => {
    fetchMock.addPath('/api/teacher/courses/123', course);
    window.fetch = fetchMock.build();

    return render(
        <div>
            <TeacherFormDelete {...props} />
            <NotificationArea />
        </div>,
        {},
        {
            teacher: {
                course,
            },
        },
    );
};

it('renders', async () => {
    await act(async () => {
        r();
    });
});

describe('TeacherFormDelete', () => {
    let component;
    beforeEach(async () => {
        await act(async () => {
            component = r();
        });
    });

    test('has back button', () => {
        expect(component.queryByText('teacher_forms_back_to_forms')).toBeTruthy();
    });

    test('course name is shown', () => {
        expect(component.queryByText(course.title)).toBeTruthy();
    });

    test('warning text is shown', () => {
        expect(component.queryByText('teacher_form_delete_warning')).toBeTruthy();
    });

    test('Delete button is present', () => {
        expect(component.queryByText('teacher_form_delete_delete_button_label')).toBeTruthy();
    });

    test('Cancel button is present', () => {
        expect(component.queryByText('teacher_form_delete_cancel_button_label')).toBeTruthy();
    });

    test('Delete button sends DELETE request', async () => {
        fetchMock.addPath('/api/teacher/courses', course, 'DELETE');

        const deleteBtn = screen.queryByRole('button', {
            name: 'teacher_form_delete_delete_button_label',
        });
        await component.user.click(deleteBtn);
        expect(document.querySelector('.notification-area')).toBeInTheDocument();
    });
});
