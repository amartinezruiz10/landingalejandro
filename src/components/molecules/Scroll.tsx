import React from "react";
import Barra1 from "../atoms/Barras/Barra1";
import Barra2 from "../atoms/Barras/Barra2";
import Cervezas from "../atoms/Cervezas";

function Scroll(){
    return(
        <div>
            <Barra1/>
            <Cervezas/>
            <Barra2/>

        </div>
    )
}

export default Scroll;

/**        <div class="flex overflow-x-auto space-x-4 pb-4">
            <div class="bg-white p-4 flex-shrink-0 rounded-lg border border-[#EBEDEB]"> */