import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import { Form } from 'react-bootstrap';

const Message = ({ type, children, messageId }) => {
    const messageType =
        {
            light: 'text-secondary',
            neutral: '',
            info: 'text-info',
            warning: 'text-danger',
        }[type] || '';

    return (
        <Form.Text id={messageId} aria-live="assertive" className={`form-message ${messageType}`}>
            {children}
        </Form.Text>
    );
};

Message.propTypes = {
    type: PropTypes.oneOf(['light', 'neutral', 'warning']),
    children: PropTypes.node.isRequired,
    messageId: PropTypes.string, // Optional ID for accessibility
};

export default Message;
