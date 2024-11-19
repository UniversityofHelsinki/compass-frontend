import React from 'react';
import PropTypes from 'prop-types';
import './HyButton.css';

const HyButton = ({
    children = [],
    className,
    variant,
    leftIcon,
    rightIcon,
    mini = false,
    onClick,
    ...rest
}) => {
    const miniClass = mini ? 'hy-button-mini' : '';

    const onButtonClick = (event) => {
        if (onClick) {
            event.preventDefault();
            onClick(event);
        }
    };

    return (
        <button
            className={`hy-button ${miniClass} hy-button-${variant} ${className}`}
            onClick={onButtonClick}
            {...rest}
        >
            <div className="hy-button-content">
                {leftIcon && <div className="hy-button-icon">{leftIcon}</div>}
                {leftIcon && <div className="hy-button-icon-separator"></div>}
                {children}
                {rightIcon && <div className="hy-button-icon-separator"></div>}
                {rightIcon && <div className="hy-button-icon">{rightIcon}</div>}
            </div>
            <div className="hy-button-bottom"></div>
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
    children: PropTypes.node,
};

export default HyButton;
