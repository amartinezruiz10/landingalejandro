import React from "react";
import Image from "next/image";

function Card2(){
    return(
        <div className="flex flex-row gap-4">
            <Image src="/images/card2.png" alt="Ejemplo" width={120} height={140}/>
            <div className="flex flex-col justify-between pr-4">
                <p className="text-[#F68217] font-normal font-saaseriesb text-[44px] leading-10 tracking-[1px]">02</p>
                <p className="text-[#262626] font-normal font-saaseriesb text-[24px] leading-6  tracking-[1px] uppercase ">solamente para los primeros 100 usuarios que se suscriban</p>
            </div>
        </div>
    )

}

export default Card2;