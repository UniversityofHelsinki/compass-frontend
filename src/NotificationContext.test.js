import React from 'react';
import NotificationProvider, { useNotification } from './NotificationContext';
import { render, screen, act, fireEvent } from './test/render';

it('renders', () => {
    render(
        <NotificationProvider>
            <></>
        </NotificationProvider>,
    );
});

const TestNotificationWriter = ({ notification }) => {
    const { setNotification } = useNotification();

    return <button onClick={() => setNotification(notification)}>Send</button>;
};

const TestNotificationReader = () => {
    const { notification } = useNotification();
    return <span>{notification?.content}</span>;
};

const TestComponent = ({ notification }) => {
    return (
        <NotificationProvider>
            <TestNotificationWriter notification={notification} />
            <TestNotificationReader />
        </NotificationProvider>
    );
};

describe('NotificationProvider', () => {
    describe('After setting notification', () => {
        test('Notification is seen by the readers', async () => {
            const notification = 'asdf';
            const component = <TestComponent notification={notification} />;
            const rendered = render(component);

            const button = screen.getByText('Send');

            await rendered.user.click(button);
            expect(screen.queryByText(notification)).toBeTruthy();
        });
    });
});
