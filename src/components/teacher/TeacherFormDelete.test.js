import React from 'react';
import { render } from '../../test/render';
import TeacherFormDelete from './TeacherFormDelete';

const course = {
    id: 'AAA',
    title: 'AAAA BBBB CCCC',
};

const r = (props = {}) => {
    return render(
        <TeacherFormDelete {...props} />,
        {},
        {
            teacher: {
                course,
            },
        },
    );
};

it('renders', () => {
    r();
});

describe('TeacherFormDelete', () => {
    let component;
    beforeEach(() => {
        component = r();
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
});
