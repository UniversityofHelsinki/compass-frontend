import React from 'react';
import PropTypes from "prop-types";
import './FormElementHeader.css';

const FormElementHeader = ({ children, id, ...rest }) => {

    return (
        <div className="form-element-header">
            <h3 { ...rest } id={id}>
                {children}
            </h3>
        </div>
    );
};

FormElementHeader.propTypes = {
    children: PropTypes.any
};

export default FormElementHeader;
