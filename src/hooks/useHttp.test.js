import React from 'react';
import { act, renderHook } from '../test/render';
import { get, useGET } from './useHttp.js';

describe('useHttp', () => {
    const responseBody = { body: 'hei' };
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation((path, options) => {
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

describe('get', () => {
    let response = {};
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation((path) => {
            if (path === '/AAA') {
                return {
                    clone: () => ({
                        ok: true,
                        status: 200,
                        json: () => Promise.resolve(response),
                    }),
                };
            } else if (path === '/BBB') {
                return {
                    clone: () => ({
                        ok: false,
                        status: 400,
                        json: () => Promise.resolve(response),
                    }),
                };
            }
        });
    });

    test('fetched only once with the same tag', async () => {
        const testGet = () => get({ path: `/AAA`, tag: 'TAG' });
        const calls = 10;
        for (let i = 0; i < calls; i++) {
            await testGet();
        }
        expect(window.fetch.mock.calls).toHaveLength(1);
    });

    test('fetched every time w/o a tag', async () => {
        const testGet = () => get({ path: '/AAA', tag: null });
        const calls = 10;
        for (let i = 0; i < calls; i++) {
            const response = await testGet();
            expect(response.ok).toBe(true);
        }
        expect(window.fetch.mock.calls).toHaveLength(calls);
    });

    test('fetched every time with an error', async () => {
        const testGet = () => get({ path: '/BBB' });
        const calls = 10;
        for (let i = 0; i < calls; i++) {
            const response = await testGet();
            expect(response.ok).toBe(false);
        }
    });
});
