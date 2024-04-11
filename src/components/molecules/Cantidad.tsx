import React from "react";
import PackQuantity from "../atoms/PackQuantity";
import ReservaloYa from "../atoms/ReservaloYA";

function Cantidad() {
    return(
        <div className="flex flex-row">
            <PackQuantity/>
            <ReservaloYa/>
        </div> 
    )
}

export default Cantidad;