import React, { useId } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import './RadioButtonGroup.css';
import Message from './Message';

const RadioButtonGroup = ({
    answerNotFound = false,
    options = [],
    validationMessage = { type: 'neutral', content: '' },
    onChange,
    value = null,
    field,
    ...rest
}) => {
    const id = useId();
    const handleClick = (field, newValue) => {
        /*if (value === newValue) {
            // Uncheck the radio button when current value was previously selected
            onChange(field, null);
        } else {*/
        if (value !== newValue) {
            onChange(field, newValue);
        }
    };

    return (
        <>
            <>
                {options?.length > 0 &&
                    options.map((option, index) => {
                        const { value: optionValue, label: optionLabel } = option || {}; // Safely destructure option properties

                        return (
                            <Form.Check
                                className="radio-button-group"
                                type="radio"
                                checked={
                                    (value?.toString() === optionValue &&
                                        answerNotFound === false) ||
                                    value === null
                                }
                                key={`${optionValue || 'unknown'}-${index}`} // Fallback for key
                                value={optionValue || ''}
                                id={`compass-${optionValue || 'unknown'}-${id}`}
                                label={optionLabel || ''}
                                onClick={(e) => handleClick(field, e.target.value)}
                                {...rest}
                            />
                        );
                    })}
            </>
            <Message
                type={
                    ['light', 'neutral', 'warning'].includes(validationMessage?.type)
                        ? validationMessage.type
                        : 'neutral'
                }
            >
                {validationMessage?.content}
            </Message>
        </>
    );
};

RadioButtonGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    validationMessage: PropTypes.shape({
        type: PropTypes.oneOf(['light', 'neutral', 'warning']),
        content: PropTypes.string,
    }),
    answerNotFound: PropTypes.bool,
};

export default RadioButtonGroup;
