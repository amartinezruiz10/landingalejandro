import React from "react";
import PackQuantity from "../atoms/PackQuantity";
import ReservaloYa from "../atoms/ReservaloYA";

function Cantidad() {
    return(
        <div className="flex flex-row sm:hidden">
            <PackQuantity/>
            <ReservaloYa/>
        </div> 
    )
}

export default Cantidad;