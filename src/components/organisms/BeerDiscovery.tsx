import React from "react";
import Image from "next/image";
import Discovery from "../atoms/Discovery";


function BeerDiscovery(){
    return(
        <div className="p-6 flex flex-col gap-4 bg-[#F8F7F4] items-center sm:gap-8 sm:py-[46px]">
            <Discovery/>
            <Image className="sm:w-[652px] sm:h-[321px]" src="/images/bannerFotos.png" alt="Ejemplo" width={333} height={164}/>
        </div>
    )
} 

export default BeerDiscovery;