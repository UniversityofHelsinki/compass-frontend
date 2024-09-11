import React from "react";
import './Notification.css';

const Notification = ({ msg }) => {
    if (!msg) {
        return <span>&nbsp;&nbsp;</span>;
    }

    return (
        <div className="notifications">
            { (msg) ? msg : <span>&nbsp;&nbsp;</span>}
        </div>
    )
}

export default Notification;
