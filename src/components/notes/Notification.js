import React from "react";
import './Notification.css';
import PropTypes from "prop-types";

const Notification = ({ msg, type }) => {

    const messageType = ({
        'light': 'text-secondary',
        'neutral': '',
        'warning': 'text-danger'
    })[type] || 'neutral';


    if (!msg) {
        return <span>&nbsp;&nbsp;</span>;
    }

    return (
        <div className={`notifications ${messageType}`}>
            { (msg) ? <span>{msg}&nbsp;</span> : <span>&nbsp;&nbsp;</span>}
        </div>
    )
}

Notification.protoTypes = {
    msg: PropTypes.string,
    type: PropTypes.oneOf(['light', 'neutral', 'warning'])
}

export default Notification;
