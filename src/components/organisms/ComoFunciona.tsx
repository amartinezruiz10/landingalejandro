import React from "react";
import CuatroCards from "../molecules/CuatroCards";
import Suscribete from "../atoms/Suscribite";

function ComoFunciona(){
    return(
        <div className="flex flex-col gap-6 px-4 py-8 bg-[#F8F7F4]">
            <Suscribete/>
            <CuatroCards/>
        </div>
    )
}

export default ComoFunciona;