import React from "react";
import Apartado1 from "../atoms/Apartados/Apartado1";
import Apartado2 from "../atoms/Apartados/Apartado2";

function Apartados(){
    return(
        <div className="flex flex-row gap-9">
            <Apartado1/>
            <Apartado2/>
        </div>
    )
}

export default Apartados;