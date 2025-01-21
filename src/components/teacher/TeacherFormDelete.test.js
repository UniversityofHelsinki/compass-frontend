import React from 'react';
import { render, act, screen } from '../../test/render';
import NotificationArea from '../utilities/NotificationArea';
import TeacherFormDelete from './TeacherFormDelete';

jest.mock('react-router-dom', () => {
    const original = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...original,
        useParams: () => ({ course: 123 }),
    };
});

const course = {
    id: 'AAA',
    title: 'AAAA BBBB CCCC',
};

const r = (props = {}) => {
    window.fetch = jest.fn().mockImplementation(async (path, options) => {
        return {
            clone: () => ({
                ok: true,
                status: 200,
                json: async () => course,
            }),
        };
    });
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
        window.fetch = jest.fn().mockImplementation(async (path, options) => {
            return {
                clone: () => ({ ok: true, body: course }),
            };
        });

        const deleteBtn = screen.queryByRole('button', {
            name: 'teacher_form_delete_delete_button_label',
        });
        await component.user.click(deleteBtn);
        expect(document.querySelector('.notification-area')).toBeInTheDocument();
    });
});
