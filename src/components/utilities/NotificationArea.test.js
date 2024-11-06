import React from 'react';
import NotificationProvider, { useNotification } from '../../NotificationContext';
import { render, screen, act } from '../../test/render';
import NotificationArea from './NotificationArea';

it('renders', () => {
    render(
        <NotificationProvider>
            <NotificationArea />
        </NotificationProvider>,
    );
});

const TestComponent = () => {
    const Setter = () => {
        const { setNotification } = useNotification();
        return <button onClick={() => setNotification('asdf')}>Send</button>;
    };

    return (
        <NotificationProvider>
            <NotificationArea />
            <Setter />
        </NotificationProvider>
    );
};

describe('NotificationArea', () => {
    test('shows the notification defined set somewhere else', async () => {
        const component = render(<TestComponent />);

        const button = screen.queryByText('Send');
        await component.user.click(button);

        expect(screen.queryByText('asdf')).toBeTruthy();
    });

    test('Notification has aria-live set', async () => {
        const rendered = render(<TestComponent />);
        await rendered.user.click(screen.queryByText('Send'));

        const byAttribute = rendered.container.querySelector(`[aria-live=assertive]`);

        expect(byAttribute).toBeTruthy();
    });

    test('Notification area contains close button', async () => {
        const rendered = render(<TestComponent />);
        await rendered.user.click(screen.queryByText('Send'));

        const closeButton = screen.queryByText('Sulje ilmoitus');
        expect(closeButton).toBeTruthy();
    });
});
