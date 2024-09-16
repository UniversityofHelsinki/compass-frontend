import React from "react";
import './Notification.css';

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
            { (msg) ? msg : <span>&nbsp;&nbsp;</span>}
        </div>
    )
}

export default Notification;
