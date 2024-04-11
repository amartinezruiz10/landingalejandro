import React from "react";
import Descuento from "../molecules/Descuento";
import Cantidad from "../molecules/Cantidad";
import Informacion from "../molecules/Informacion";

function Products(){
    return(
        <div className="bg-[#F8F7F4]">
            <Descuento/>
            <Cantidad/>
            <Informacion/>
        </div>
    )
}

export default Products;