import React from 'react';
import { render, screen } from '../../test/render';
import TeacherFormsTable from './TeacherFormsTable';

const courses = [
  {
    "id": 1,
    "course_id": "A1234",
    "user_name": "baabenom",
    "title": "Ohjelmoinnin perusteet",
    "description": "AAAAAA",
    "start_date": "2024-07-09T00:00:00.000Z",
    "end_date": "2025-01-11T00:00:00.000Z",
    "created": "2024-10-10T04:27:22.971Z"
  },
  {
    "id": 3,
    "course_id": "B1234",
    "user_name": "baabenom",
    "title": "Ohjelmoinnin jatkokurssi",
    "description": "AAAAAA",
    "start_date": "2024-09-09T00:00:00.000Z",
    "end_date": "2025-02-11T00:00:00.000Z",
    "created": "2024-10-10T04:31:00.819Z"
  },
  {
    "id": 4,
    "course_id": "C1234",
    "user_name": "baabenom",
    "title": "Ohjelmoinnin perusteet 2023",
    "description": "AAAAAA",
    "start_date": "2023-10-04T00:00:00.000Z",
    "end_date": "2024-01-05T00:00:00.000Z",
    "created": "2024-10-10T04:31:00.819Z"
  },
  {
    "id": 5,
    "course_id": "AAAEEE",
    "user_name": "baabenom",
    "title": "Opiskelijan digitaidot kevät 2025",
    "description": "AAAAAA",
    "start_date": "2025-01-11T00:00:00.000Z",
    "end_date": "2025-04-14T00:00:00.000Z",
    "created": "2024-10-10T04:31:00.819Z"
  },
  {
    "id": 6,
    "course_id": "A1234PITKAIDIDIDIDIDIDIDIDIDIDI",
    "user_name": "baabenom",
    "title": "TODELLA PITKÄ KURSSIN NIMI ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "description": "KUVAUSTA ON KERRAKSEEN LOREM IPSUM LOREM IPSUM LOREMP IPSUKUVAUSTA ON KERRAKSEEN LOREM IPSUM LOREM IPSUM LOREMP IPSUKUVAUSTA ON KERRAKSEEN LOREM IPSUM LOREM IPSUM LOREMP IPSUM",
    "start_date": "2024-06-08T00:00:00.000Z",
    "end_date": "2025-07-16T00:00:00.000Z",
    "created": "2024-10-10T04:32:47.716Z"
  }
];

test('rendering', () => {
  render(
    <TeacherFormsTable 
      teacherForms={courses} 
      sortOpts={{}} 
      onSortCriteriaChange={() => {}} 
    />,
  );
});

describe('Teacher has courses', () => {
  let component;
  beforeEach(() => {
    component = render(
      <TeacherFormsTable 
        teacherForms={courses} 
        sortOpts={{}}
        onSortCriteriaChange={() => {}}
      />
    );
  });

  test('Titles are visible', () => {
    const titles = courses.map(c => c.title);
    expect(titles.length).toBeGreaterThan(0);
    titles.forEach(title => {
      expect(screen.queryByText(title)).toBeTruthy();
    });
  });

  test('External course identifiers are visible', () => {
    const ids = courses.map(c => c.course_id);
    expect(ids.length).toBeGreaterThan(0);
    ids.forEach(id => {
      expect(screen.queryByText(id)).toBeTruthy();
    });
  });

  test('Reflection periods are visible', () => {
    const periods = courses.map(c => ([
        new Date(c.start_date).toLocaleDateString('fi-FI'), 
        new Date(c.end_date).toLocaleDateString('fi-FI')
    ]));
    expect(periods.length).toBeGreaterThan(0);
    periods.forEach(([start, end]) => {
      expect(screen.queryAllByText(start)).toBeTruthy();
      expect(screen.queryAllByText(end)).toBeTruthy();
    });
  });

  test('Action buttons are present', () => {
    const rows = screen.queryAllByRole('row');
    expect(rows.length).toBeGreaterThan(0);
    rows.forEach(row => {
      expect(row.querySelectorAll("button").length).toBeGreaterThan(2);
    });
  });

});
