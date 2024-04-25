import React from "react";
import Actions from "../atoms/Actions";
import Title from "../atoms/Title";

function MainHeader() {
    return(
        <div className="flex flex-col sm:w-1/3 sm:pt-[32px]">
            <Title/>
            <Actions/>
        </div> 
    )
}

export default MainHeader;