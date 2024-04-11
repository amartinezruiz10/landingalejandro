import React from "react";
import Image from "next/image";

function Card3(){
    return(
        <div className="flex flex-row gap-4">
            <Image src="/images/card3.png" alt="Ejemplo" width={120} height={140}/>
            <div className="flex flex-col justify-between py-[22px] pr-4">
                <p className="text-[#F68217] font-normal font-saaseriesb text-[44px] leading-10 tracking-[1px]">03</p>
                <p className="text-[#262626] font-normal font-saaseriesb text-[24px] leading-6 tracking-[1px] uppercase ">recibe cada más nuevas cervezas</p>
            </div>
        </div>
    )

}

export default Card3;