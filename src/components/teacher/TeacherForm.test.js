import React from 'react';
import { render, screen } from '../../test/render';
import TeacherForm from './TeacherForm';

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
        expect(screen.queryByPlaceholderText('Syötä nimi')).toBeTruthy();
    });

    test('External Id', () => {
        expect(screen.queryByPlaceholderText('Syötä tunniste')).toBeTruthy();
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
        expect(screen.queryByText('Lisää aihe')).toBeTruthy();
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
