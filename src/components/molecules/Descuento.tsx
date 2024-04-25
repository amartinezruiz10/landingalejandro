import React from "react";
import Image from "next/image";
import TagPromo from "../atoms/TagPromo";

function Descuento() {
    return(
        <div className="relative flex justify-center px-4 pt-4 sm:p-0">
            <TagPromo/>
            <Image className="sm:hidden" src="/images/EstrellaGalicia.png" alt="Ejemplo" width={113} height={243}/>
            <Image className="hidden sm:flex" src="/images/EstrellaPc.png" alt="Ejemplo" width={470} height={416}/>
        </div> 
    )
}

export default Descuento;