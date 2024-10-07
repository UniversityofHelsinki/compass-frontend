import React, {useId} from 'react';
import { Form } from 'react-bootstrap';
import './TextArea.css';
import PropTypes from "prop-types";
import Message from './Message';

const TextArea = ({ value, message, ...rest }) => {
    const messageId = useId();
    const isInvalid = !!message?.content;

    return (
        <>
            <Form.Control value={value} as="textarea" rows={5} aria-invalid={isInvalid} aria-describedby={messageId} {...rest}></Form.Control>
            <Message type={message?.type} messageId={messageId} > {message?.content} </Message>
        </>
    );
};

TextArea.propTypes = {
    answer: PropTypes.string,
    message: PropTypes.shape({
        content: PropTypes.string,
        type: PropTypes.oneOf(['light', 'neutral', 'warning'])
    })
};

export default TextArea;
