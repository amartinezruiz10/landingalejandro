import React from "react";
import Image from "next/image";
import TagPromo from "../atoms/TagPromo";

function Descuento() {
    return(
        <div className="relative flex justify-center px-4 pt-4">
            <TagPromo/>
            <Image src="/images/EstrellaGalicia.png" alt="Ejemplo" width={113} height={243}/>
        </div> 
    )
}

export default Descuento;