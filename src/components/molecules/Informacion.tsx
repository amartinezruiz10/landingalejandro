import React from "react";
import Contenido from "../atoms/Contenido";
import Precio from "../atoms/Precio";


function Informacion() {
    return(
        <div className="flex flex-col pb-4 px-6 pt-[30px]">
            <Contenido/>
            <Precio/>
        </div> 
    )
}

export default Informacion;