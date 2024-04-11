import React from "react";
import Actions from "../atoms/Actions";
import Title from "../atoms/Title";

function MainHeader() {
    return(
        <div className="absolute flex flex-col">
            <Title/>
            <Actions/>
        </div> 
    )
}

export default MainHeader;