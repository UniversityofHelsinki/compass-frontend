import React from 'react';
import { act, renderHook } from '../test/render';
import { useGET } from './useHttp.js';

describe('useHttp', () => {
    const responseBody = { body: 'hei' };
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation((path, options) => {
            console.log('fetch suoritus', path);
            if (path === '/asdf') {
                return {
                    clone: () => ({
                        ok: true,
                        status: 200,
                        json: () => Promise.resolve(responseBody),
                    }),
                };
            }
            if (path === '/error') {
                return {
                    clone: () => ({
                        ok: false,
                        status: 400,
                        json: () => Promise.resolve(responseBody),
                    }),
                };
            }
        });
    });

    test('value is returned if response is ok', async () => {
        let result;
        await act(async () => {
            result = renderHook(({ path, tag }) => useGET({ path, tag }), {
                initialProps: {
                    path: '/asdf',
                    tag: 'TESTI',
                },
            });
        });
        result.rerender({ path: '/asdf', tag: 'TESTI' });

        const [value, error, reload] = result.result.current;
        expect(value).toEqual(responseBody);
        expect(error).toBeNull();
        expect(typeof reload).toBe('function');
    });

    test('value is null & error is truthy if response is ok', async () => {
        let result;
        await act(async () => {
            result = renderHook(({ path, tag }) => useGET({ path, tag }), {
                initialProps: {
                    path: '/error',
                    tag: 'ERROR',
                },
            });
        });
        const [value, error, reload] = result.result.current;
        expect(error.ok).toBeFalsy();
        expect(error.status).toBe(400);
        expect(typeof reload).toBe('function');
    });
});
