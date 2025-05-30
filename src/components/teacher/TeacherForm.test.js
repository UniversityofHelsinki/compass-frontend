import React from 'react';
import { mockFetch } from '../../test/mockFetch';
import { act, render, screen } from '../../test/render';
import TeacherForm from './TeacherForm';

window.fetch = mockFetch().build();
it('renders', () => {
    render(<TeacherForm onSave={() => {}} teacherForm={{}} />);
});

const teacherForm = {
    assignments: [],
    course_id: 'AAAEEE',
    created: '2024-10-10T04:31:00.819Z',
    description: 'AAAAAA',
    end_date: '2025-04-14T00:00:00.000Z',
    id: 5,
    start_date: '2025-01-11T00:00:00.000Z',
    title: 'Opiskelijan digitaidot kevät 2025',
    user_name: 'baabenom',
};

describe('Required fields are present', () => {
    beforeEach(() => {
        render(<TeacherForm isNew={false} onSave={() => {}} teacherForm={teacherForm} />);
    });

    test('Title', () => {
        expect(screen.queryByPlaceholderText('teacher_form_title_placeholder')).toBeTruthy();
    });

    test('External Id', () => {
        expect(screen.queryByPlaceholderText('teacher_form_course_id_placeholder')).toBeTruthy();
    });

    test('Start date', () => {
        expect(
            screen.queryByDisplayValue(
                new Date(teacherForm.start_date).toLocaleDateString('fi-Fi'),
            ),
        ).toBeTruthy();
    });

    test('End date', () => {
        expect(
            screen.queryByDisplayValue(new Date(teacherForm.end_date).toLocaleDateString('fi-Fi')),
        ).toBeTruthy();
    });

    test('Add topic button', () => {
        expect(screen.queryByText('teacher_form_add_assignment')).toBeTruthy();
    });
});

describe('Assignments', () => {
    let component;

    beforeEach(() => {
        component = render(
            <TeacherForm isNew={false} onSave={() => {}} teacherForm={teacherForm} />,
        );
    });

    test('Assignment row is created on Add topic button press', async () => {
        const addAssignmentButton = screen.getByRole('button', {
            name: 'teacher_form_add_assignment',
        });
        await act(async () => {
            await component.user.click(addAssignmentButton);
        });
        const topic = component.getByLabelText('teacher_form_assignment_topic_label');
        const startDate = component.getByLabelText('teacher_form_assignment_start_label');
        const endDate = component.getByLabelText('teacher_form_assignment_end_label');
        const deleteBtn = component.getByLabelText('teacher_form_delete_assignment_button');
        expect(topic).toBeInTheDocument();
        expect(startDate).toBeInTheDocument();
        expect(endDate).toBeInTheDocument();
        expect(deleteBtn).toBeInTheDocument();
    });

    test('Assignment row is deleted on trash button press', async () => {
        const addAssignmentButton = screen.getByRole('button', {
            name: 'teacher_form_add_assignment',
        });
        await act(async () => {
            await component.user.click(addAssignmentButton);
        });
        const deleteBtn = component.getByLabelText('teacher_form_delete_assignment_button');
        expect(deleteBtn).toBeInTheDocument();
        await act(async () => {
            await component.user.click(deleteBtn);
        });
        expect(deleteBtn).not.toBeInTheDocument();
    });
});

describe('Existing teacher form', () => {
    let component;
    beforeEach(() => {
        component = render(
            <TeacherForm isNew={false} onSave={() => {}} teacherForm={teacherForm} />,
        );
    });

    test('Course id form control is disabled on existing teacher forms', () => {
        const courseId = component.queryByDisplayValue('AAAEEE');
        expect(courseId.hasAttribute('disabled')).toBeTruthy();
    });
});
