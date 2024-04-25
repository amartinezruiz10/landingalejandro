import React from "react";
import Image from "next/image";

function Card1(){
    return(
        <div className="flex flex-row gap-4 py-4 border-dashed border-b sm:w-1/2 sm:border-r sm:gap-6 ">
            <Image src="/images/card1.png" alt="Ejemplo" width={120} height={140}/>
            <div className="flex flex-col justify-between py-[10px] pr-4 sm:pr-8">
                <p className="text-[#F68217] font-normal font-saaseriesb text-[44px] leading-10 tracking-[1px] sm:text-[80px] sm:leading-[62px] ">01</p>
                <p className="text-[#262626] font-normal font-saaseriesb text-[24px] leading-6  tracking-[1px] uppercase sm:text-[32px] sm:leading-8">Suscríbete a la beer discovery box de manera muy fácil</p>
            </div>
        </div>
    )

}

export default Card1;