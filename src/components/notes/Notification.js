import React from "react";

const Notification = ({ msg }) => {
    if (!msg) {
        return <span>&nbsp;&nbsp;</span>;
    }

    return (
        <div className={"fw-bolder text-success"}>
            { (msg) ? msg : <span>&nbsp;&nbsp;</span>}
        </div>
    )
}

export default Notification;
