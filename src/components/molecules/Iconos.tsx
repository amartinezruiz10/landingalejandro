import React from "react";
import Lupa from "../atoms/Lupa";
import InicioSesion from "../atoms/InicioSesion";
import Carrito from "../atoms/Carrito";

function Iconos() {
    return(
        <div className="flex flex-row gap-5 py-3">
            <Lupa/>
            <InicioSesion/>
            <Carrito/>
        </div> 
    )
}

export default Iconos;