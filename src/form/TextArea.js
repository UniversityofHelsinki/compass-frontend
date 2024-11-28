import React, { useId } from 'react';
import { Form } from 'react-bootstrap';
import './TextArea.css';
import PropTypes from 'prop-types';
import Message from './Message';
import { useTranslation } from 'react-i18next';

const TextArea = ({ value, message, ...rest }) => {
    const messageId = useId();
    const isInvalid = !!message?.content;
    const { t } = useTranslation();

    return (
        <>
            <Form.Control
                value={value}
                as="textarea"
                rows={5}
                aria-invalid={isInvalid}
                aria-describedby={messageId}
                {...rest}
            ></Form.Control>
            <div className="d-flex justify-content-between">
                <div>
                    <Message className="" type={message?.type} messageId={messageId}>
                        {' '}
                        {message?.content}{' '}
                    </Message>
                </div>
                <div>
                    <div>
                        {t('text-area-length')}: {value?.length}/3000
                    </div>
                </div>
            </div>
        </>
    );
};

TextArea.propTypes = {
    value: PropTypes.string,
    answer: PropTypes.string,
    message: PropTypes.shape({
        content: PropTypes.string,
        type: PropTypes.oneOf(['light', 'neutral', 'warning']),
    }),
};

export default TextArea;
