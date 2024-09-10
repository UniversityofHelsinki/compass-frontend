import React, {useId, useState} from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import './RadioButtonGroup.css';
import {useTranslation} from "react-i18next";
import Message from "./Message";

const RadioButtonGroup = ({ options = [], validationMessage, onChange, value = "0", ...rest }) => {
    const { t } = useTranslation();
    const id = useId();

    return (
        <>
            {options && options.map(option =>
                <Form.Check
                    className="radio-button-group"
                    type="radio"
                    checked={value === option.value}
                    key={option.value} value={option.value}
                    id={`compass-${option.value}-${id}`}
                    label={t(option.label)}
                    onChange={(e) => onChange('multiple_choice_answer' ,e.target.value)}
                    { ...rest } />
            )}
            <Message type={validationMessage?.type}>
                {validationMessage?.content}
            </Message>
        </>
    );
}

RadioButtonGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
export default RadioButtonGroup;
