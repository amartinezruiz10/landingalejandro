import React from "react";
import Hamburguesa from "../atoms/Hamburguesa";
import Logo from "../atoms/Logo";

function Titulo() {
    return(
        <div className="flex flex-row gap-4 py-[6px]">
            <Hamburguesa/>
            <Logo/>
        </div> 
    )
}

export default Titulo;