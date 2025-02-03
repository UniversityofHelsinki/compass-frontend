import React from 'react';
import { mockFetch } from '../../test/mockFetch.js';
import { act, render, renderHook } from '../../test/render.js';
import { invalidate } from '../useHttp.js';
import useTeacherForms from './useTeacherForms.js';

const fetchMock = mockFetch();
describe('useTeacherForms', () => {
    const courses = [];

    const TestComponent = () => {
        const teacherForms = useTeacherForms();
        return <></>;
    };

    const isCallToTeacherCourses = (argList) => {
        return argList.length > 0 && argList[0] === '/api/teacher/courses';
    };

    beforeEach(() => {
        fetchMock.addPath('/api/teacher/courses', { body: courses, status: 200 });
        window.fetch = fetchMock.build();
    });

    test('Makes a single request to /api/teacher/courses', async () => {
        let renderedComponent;
        await act(async () => {
            renderedComponent = render(<TestComponent />);
        });
        expect(window.fetch.mock.calls.filter(isCallToTeacherCourses)).toHaveLength(1);
        await act(async () => {
            renderedComponent.rerender(<TestComponent />);
        });
        expect(window.fetch.mock.calls.filter(isCallToTeacherCourses)).toHaveLength(1);
        invalidate(['TEACHER_COURSES']);
    });

    test('Makes an another request to /api/teacher/courses after invalidation', async () => {
        let renderedComponent;
        await act(async () => {
            renderedComponent = render(<TestComponent />);
        });
        expect(window.fetch.mock.calls.filter(isCallToTeacherCourses)).toHaveLength(1);
        invalidate(['TEACHER_COURSES']);
        await act(async () => {
            renderedComponent.rerender(<TestComponent />);
        });
        expect(window.fetch.mock.calls.filter(isCallToTeacherCourses)).toHaveLength(2);
    });
});
