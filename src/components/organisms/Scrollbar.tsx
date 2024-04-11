import React from "react";
import Scroll from "../molecules/Scroll";
import Seleccion from "../atoms/Seleccion";

function Scrollbar(){
    return(
        <div className="flex flex-col px-4 py-6 gap-6 bg-[#ECE7E1]">
            <Seleccion/>
            <Scroll/>
        </div>
    )
}

export default Scrollbar;