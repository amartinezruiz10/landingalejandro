import React from "react";
import Titulo from "../molecules/Titulo";
import Iconos from "../molecules/Iconos";

function Navbar() {
    return(
        <div className="flex flex-row justify-between px-4 py-[6px]">
            <Titulo/>
            <Iconos/>
        </div> 
    )
}

export default Navbar;