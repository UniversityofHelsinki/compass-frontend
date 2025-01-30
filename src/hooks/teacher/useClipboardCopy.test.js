import React from 'react';
import { mockFetch } from '../../test/mockFetch.js';
import { act, cleanup, render, screen, waitFor } from '../../test/render.js';
import useClipboardCopy from './useClipboardCopy.js';

const TestComponent = () => {
    const { clipboardCopy } = useClipboardCopy('123');
    return <button onClick={() => clipboardCopy()}>Copy signature</button>;
};

describe('useClipboardCopy', () => {
    let fetchMock;
    beforeAll(() => {
        fetchMock = mockFetch();
    });

    beforeEach(async () => {
        window.fetch = fetchMock.build();
        await act(async () => {
            await render(<TestComponent />);
        });
    });

    test('Shows error on request error', async () => {
        fetchMock.addPath('/api/getUrlSignature/123', {
            status: 500,
            body: undefined,
        });
        const copyBtn = await screen.findByText('Copy signature');
        await act(async () => {
            await copyBtn.click();
        });

        expect(await screen.findByText('error_generating_signed_url')).toBeInTheDocument();
    });

    test('Shows notification on copy', async () => {
        fetchMock.addPath('/api/getUrlSignature/123', {
            status: 200,
            body: 'ABCDE',
        });
        const copyBtn = await screen.findByText('Copy signature');
        await act(async () => {
            await copyBtn.click();
        });
        expect(
            await screen.findByText('teacher_forms_table_share_copy_to_clipboard'),
        ).toBeInTheDocument();
    });
});
