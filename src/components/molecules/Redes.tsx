import React from "react";
import FormasPago from "../atoms/FormasPago";
import Siguenos from "../atoms/Siguenos";

function Redes(){
    return(
        <div className="flex flex-col gap-6">
            <FormasPago/>
            <Siguenos/>
        </div>
    )
}

export default Redes;