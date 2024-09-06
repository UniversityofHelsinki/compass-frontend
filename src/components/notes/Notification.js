import React from "react";

const Notification = ({ msg }) => {
    if (!msg) {
        return <span>&nbsp;&nbsp;</span>;
    }

    return (
        //span koska, jos message on tyhjä ni "varataan tila riville" span:lla, ettei alla olevat kentät liiku
        // koska käytetään ? :  niin ei tarvi tutkia msgShow tietoa
        <div className={"fw-bolder text-success"}>
            { (msg) ? msg : <span>&nbsp;&nbsp;</span>}
        </div>
    )
}

export default Notification;
