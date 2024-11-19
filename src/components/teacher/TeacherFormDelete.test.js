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
        expect(component.queryByText('Kurssit')).toBeTruthy();
    });

    test('course name is shown', () => {
        expect(component.queryByText(course.title)).toBeTruthy();
    });

    test('warning text is shown', () => {
        expect(component.queryByText('Kaikki kurssiin liittyvät tiedot poistetaan.')).toBeTruthy();
    });

    test('Delete button is present', () => {
        expect(component.queryByText('Poista')).toBeTruthy();
    });

    test('Cancel button is present', () => {
        expect(component.queryByText('Peruuta')).toBeTruthy();
    });
});
