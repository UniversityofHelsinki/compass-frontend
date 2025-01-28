import React from 'react';
import { mockFetch } from '../test/mockFetch';
import { act, renderHook } from '../test/render';
import { get, useGET, usePOST } from './useHttp.js';

describe('useHttp', () => {
    const responseBody = { body: 'hei' };
    beforeEach(() => {
        const fetchMock = mockFetch();
        fetchMock.addPath('/asdf', {
            body: responseBody,
            status: 200,
            method: 'GET',
        });
        fetchMock.addPath('/error', {
            body: responseBody,
            status: 400,
            method: 'GET',
        });
        window.fetch = fetchMock.build();
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
        console.log(result.result);
        expect(error.ok).toBeFalsy();
        expect(error.status).toBe(400);
        expect(typeof reload).toBe('function');
    });
});

describe('get', () => {
    let response = {};
    beforeEach(() => {
        const fetchMock = mockFetch();
        fetchMock.addPath('/AAA', {
            status: 200,
            method: 'GET',
            body: response,
        });
        fetchMock.addPath('/BBB', {
            status: 400,
            body: null,
        });
        window.fetch = fetchMock.build();
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
        expect(window.fetch.mock.calls).toHaveLength(calls);
    });
});

describe('usePOST', () => {
    test('Makes a POST request', async () => {
        window.fetch = mockFetch().build();

        let result;
        await act(() => {
            result = renderHook(({ path }) => usePOST({ path }), {
                initialProps: {
                    path: '/asdf',
                    tag: 'TESTI',
                },
            }).result;
        });
        expect(result.current).toBeTruthy();
        result.current();
        expect(window.fetch.mock.calls).toHaveLength(1);
        expect(window.fetch.mock.calls[0][0]).toBeDefined();
        expect(window.fetch.mock.calls[0][1].method).toEqual('POST');
    });

    test('Invalidates tags', async () => {
        const fetchMock = mockFetch();
        fetchMock.addPath('/asdf', {
            status: 200,
            body: {},
            method: 'GET',
        });
        fetchMock.addPath('/asdf', {
            status: 200,
            body: {},
            method: 'POST',
        });
        window.fetch = fetchMock.build();

        let result;
        await act(() => {
            result = renderHook((props) => usePOST({ path: '/asdf', invalidates: ['A'] }), {
                initialProps: {
                    path: '/asdf',
                    tags: ['A', 'B'],
                },
            }).result;
        });

        await get({ path: '/asdf', tag: 'A' });
        expect(window.fetch.mock.calls).toHaveLength(1);
        await get({ path: '/asdf', tag: 'A' });
        expect(window.fetch.mock.calls).toHaveLength(1);
        await result.current({});
        expect(window.fetch.mock.calls).toHaveLength(2);
        await get({ path: '/asdf', tag: 'A' });
        expect(window.fetch.mock.calls).toHaveLength(3);
    });
});
