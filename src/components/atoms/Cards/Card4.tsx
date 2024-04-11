import React from "react";
import Image from "next/image";

function Card4(){
    return(
        <div className="flex flex-row gap-4">
            <Image src="/images/card4.png" alt="Ejemplo" width={120} height={140}/>
            <div className="flex flex-col justify-between py-[22px] pr-4">
                <p className="text-[#F68217] font-normal font-saaseriesb text-[44px] leading-10 tracking-[1px]">04</p>
                <p className="text-[#262626] font-normal font-saaseriesb text-[24px] leading-6  tracking-[1px] uppercase ">entrega en 24-72 horas</p>
            </div>
        </div>
    )

}

export default Card4;