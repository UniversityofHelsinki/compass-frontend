import React from 'react';
import PropTypes from 'prop-types';
import './HyButton.css';

const HyButton = ({
                      children = [],
                      className,
                      variant,
                      onClick,
                      ...rest
}) => {

    const onButtonClick = (event) => {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    };

    return (
        <button className={`hy-button-${variant} ${className}`} onClick={onButtonClick} { ...rest }>
        </button>
    );
};

HyButton.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    mini: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default HyButton;
