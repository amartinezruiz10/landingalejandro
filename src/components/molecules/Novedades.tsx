import React from "react";
import UltimasNovedades from "../atoms/UltimasNovedades";
import Correo from "../atoms/Correo";

function Novedades(){
    return(
        <div className="flex flex-col gap-4">
            <UltimasNovedades/>
            <Correo/>
        </div>
    )
}

export default Novedades;