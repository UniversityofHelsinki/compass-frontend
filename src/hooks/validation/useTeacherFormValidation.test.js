import React from 'react';
import { renderHook } from '../../test/render';
import useTeacherFormValidation from './useTeacherFormValidation';

const isNotNull = (a) => !a && 'was_null';
const validations = {
    firstName: [isNotNull],
    lastName: [isNotNull],
};

const render = (validations, validatables) => {
    return renderHook(
        ({ validations, validatables }) => useTeacherFormValidation(validations, validatables),
        { initialProps: { validations, validatables } },
    );
};

describe('useTeacherFormValidation', () => {
    test('rendering', () => {
        const { result } = renderHook(() => useTeacherFormValidation());
    });

    describe('validatables does not exist', () => {
        test('[{}] is returned', () => {
            const { result } = render();
            expect(Array.isArray(result.current)).toBeTruthy();
            expect(result.current).toHaveLength(1);
            expect(Object.getOwnPropertyNames(result.current[0])).toHaveLength(0);
        });
    });

    describe('property w/o validations', () => {
        test("property's validation results are null", () => {
            const { result } = render({ firstName: [] }, [
                { firstName: 'pekka', lastName: 'asdf' },
            ]);

            expect(result.current[0].firstName).toBeNull();
        });
    });

    describe('property validations', () => {
        const validatables = [
            {
                firstName: 'Keijo',
                lastName: 'Pakkanen',
            },
        ];

        let result;

        beforeEach(() => {
            result = render(validations, validatables).result;
        });

        test('validation errors are empty when there is no problems', () => {
            expect(result.current[0].firstName).toBeNull();
            expect(result.current[0].lastName).toBeNull();
        });

        test('validation error is included in results on error', () => {
            const { result } = render({ ...validations }, [{ ...validatables[0], lastName: null }]);
            expect(result.current[0].lastName).toBe('was_null');
        });
    });

    describe('multiple validatables', () => {
        let result;
        beforeEach(() => {
            result = render(validations, [
                {
                    firstName: 'pekka',
                    lastName: 'pakkanen',
                },
                {
                    firstName: 'keijo',
                    lastName: null,
                },
            ]).result;
        });

        test('ith element of the results are the results of ith validatable', () => {
            expect(result.current[0].firstName).toBeNull();
            expect(result.current[0].lastName).toBeNull();
            expect(result.current[1].firstName).toBeNull();
            expect(result.current[1].lastName).toBe('was_null');
        });
    });
});
