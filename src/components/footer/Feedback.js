import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FeedbackIcon } from '../utilities/icons/mail.svg';
import Colors from '../utilities/HyColors';
import './Feedback.css';

const Feedback = ({ to, label, fill, height = 12, width = 12 }) => {
    return (
        <>
            <a
                href={to}
                aria-haspopup="dialog"
                target="_blank"
                rel="noreferrer noopener"
                className="feedback-padding"
            >
                {label}
            </a>
            <FeedbackIcon
                className="footer-feedback-icon"
                height={height}
                width={width}
                fill={fill || Colors.white}
            />
        </>
    );
};

Feedback.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Feedback;
