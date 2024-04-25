'use client'
import React from "react";
import Image from "next/image";

function Cervezas(){
    return(
        <div className="flex overflow-x-auto pb-4">
              <style jsx>{`
        ::-webkit-scrollbar {
    
          height: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #F68217;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
          background-color: #D8D3CE; 
          border-radius: 3px;
        }
        @media (max-width: 767px) {
            ::-webkit-scrollbar {
                width: 0px;
                height: 0px;
              }
        }
      `}</style>
            <div className="flex-shrink-0 flex-grow max-w-[233px] sm:max-w-[387px]">
                <div className="flex flex-row mb-2 items-center justify-between sm:justify-end sm:gap-4 sm:mb-6">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.37207" width="40" height="40" rx="20" fill="#262626"/>
<path d="M21.5 13.3721V27.3721H19.52V15.4321L17 16.4921V14.7321L20.24 13.3721H21.5Z" fill="white"/>
                    </svg>
                    <svg className="sm:w-[157px]" width="177" height="2" viewBox="0 0 177 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="177" height="1" transform="translate(0 0.87207)" fill="#262626"/>
                    </svg>
                </div>
                <div className=" py-6 px-4 border-[0.5px] border-[#D8D3CE]">
                <div className="flex flex-col gap-6 items-center">
                    <Image className="sm:hidden" src="/images/lager.png" alt="Ejemplo" width={140} height={140}/>
                    <Image className="hidden sm:flex" src="/images/2lager.png" alt="Ejemplo" width={140} height={140}/>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-bold font-redhat text-[11px] leading-3 uppercase tracking-[2px] text-[#6E6762] ">brewdog</p>
                            <p className="font-normal font-saaseriesb text-[32px] leading-8 uppercase text-[#262626]">Planet Pale</p>
                            <p className="font-normal font-saaseriesb text-[24px] leading-6 uppercase text-[#F68217]">Lager</p>
                        </div>
                        <p className="line-clamp-4 font-redhat font-medium text-[14px] leading-5 px-4 text-center text-[#6E6762] tracking-[0.3px] sm:text-[14px] sm:leading-5"><span className="font-bold sm:text-[14px] sm:leading-5">Vol. Alcohol: <span className="font-medium">4.5º.</span> Perfil sensorial: </span>Elaborada con lúpulos puramente tropicales como lo son Ahtanum, Talus, Mosaic, Citra. Su aroma tiene un fuerte tono cítrico con sutiles tonos de resina y pino que dan paso a suaves frutas tropicales. De sabor ligeramente amargo tiene el equilibrio perfecto que permite también degustar la piel de los cítricos. Su color, olor y sabor tropical, es un claro homenaje a la costa oeste. </p>
                        <p className="font-normal font-saaseriesc text-[12px] leading-[14px] tracking-[1px] text-[#262626] uppercase underline underline-offset-[5px]">ver más</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex-shrink-0 flex-grow  max-w-[233px] sm:max-w-[387px] ">
                <div className="flex flex-row mb-2 items-center justify-between sm:gap-4 sm:mb-6">
                    <svg className="w-[157px]" width="177" height="2" viewBox="0 0 177 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="177" height="1" transform="translate(0 0.87207)" fill="#262626"/>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="#262626"/>
<path d="M14.98 27V25.6L20.66 19.56C21.0467 19.16 21.3467 18.8 21.56 18.48C21.7733 18.16 21.92 17.86 22 17.58C22.0933 17.2867 22.14 16.98 22.14 16.66C22.14 16.0333 21.8867 15.5133 21.38 15.1C20.8733 14.6867 20.2333 14.48 19.46 14.48C18.82 14.48 18.22 14.6067 17.66 14.86C17.1 15.1133 16.48 15.5533 15.8 16.18L14.72 14.86C15.4667 14.1667 16.2333 13.6467 17.02 13.3C17.82 12.9533 18.6467 12.78 19.5 12.78C20.3933 12.78 21.18 12.94 21.86 13.26C22.54 13.58 23.0667 14.0267 23.44 14.6C23.8267 15.16 24.02 15.8067 24.02 16.54C24.02 17.0067 23.96 17.44 23.84 17.84C23.72 18.2267 23.5133 18.64 23.22 19.08C22.9267 19.5067 22.5133 20 21.98 20.56L17.42 25.36L24.3 25.34V27H14.98Z" fill="white"/>
                    </svg>
                    <svg className="w-[157px]" width="177" height="2" viewBox="0 0 177 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="177" height="1" transform="translate(0 0.87207)" fill="#262626"/>
                    </svg>
                </div>
                <div className=" py-6 px-4 border-[0.5px] border-[#D8D3CE]">
                <div className="flex flex-col gap-6 items-center">
                    <Image className="sm:hidden" src="/images/pilsner.png" alt="Ejemplo" width={140} height={140}/>
                    <Image className="hidden sm:flex" src="/images/2pilsner.png" alt="Ejemplo" width={140} height={140}/>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-bold font-redhat text-[11px] leading-3 uppercase tracking-[2px] text-[#6E6762] ">pils</p>
                            <p className="font-medium font-saaseriesb text-[32px] leading-8 uppercase text-[#262626]">La Pirata brewing</p>
                            <p className="font-normal font-saaseriesb text-[24px] leading-6 uppercase text-[#F68217]">Pilsner</p>
                        </div>
                        <p className="line-clamp-4 font-redhat font-medium text-[14px] leading-5 px-4 text-center text-[#6E6762] tracking-[0.3px] sm:text-[14px] sm:leading-5"><span className="font-bold sm:text-[14px] sm:leading-5">Vol. Alcohol: <span className="font-medium">4.5º.</span> Perfil sensorial: </span>Elaborada con lúpulos puramente tropicales como lo son Ahtanum, Talus, Mosaic, Citra. Su aroma tiene un fuerte tono cítrico con sutiles tonos de resina y pino que dan paso a suaves frutas tropicales. De sabor ligeramente amargo tiene el equilibrio perfecto que permite también degustar la piel de los cítricos. Su color, olor y sabor tropical, es un claro homenaje a la costa oeste. </p>
                        <p className="font-normal font-saaseriesc text-[12px] leading-[14px] tracking-[1px] text-[#262626] uppercase underline underline-offset-[5px] ">ver más</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex-shrink-0 flex-grow max-w-[233px] sm:max-w-[387px]">
                <div className="flex flex-row mb-2 items-center justify-between sm:justify-start sm:gap-4 sm:mb-6">
                <svg className="w-[157px]" width="177" height="2" viewBox="0 0 177 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="177" height="1" transform="translate(0 0.87207)" fill="#262626"/>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666748" width="40" height="40" rx="20" fill="#262626"/>
<path d="M20.4667 27.22C19.4667 27.22 18.5267 27.0467 17.6467 26.7C16.7801 26.34 16.0267 25.8267 15.3867 25.16L16.6867 23.92C17.2467 24.5067 17.8134 24.9267 18.3867 25.18C18.9734 25.42 19.6601 25.54 20.4467 25.54C21.0734 25.54 21.6267 25.4333 22.1067 25.22C22.6001 25.0067 22.9801 24.7133 23.2467 24.34C23.5134 23.9667 23.6467 23.5333 23.6467 23.04C23.6467 22.5867 23.5267 22.1867 23.2867 21.84C23.0601 21.48 22.7467 21.2067 22.3467 21.02C21.9601 20.82 21.5001 20.72 20.9667 20.72H19.2667V19.1H20.8267C21.5334 19.1 22.1001 18.8933 22.5267 18.48C22.9534 18.0667 23.1667 17.5267 23.1667 16.86C23.1667 16.42 23.0467 16.02 22.8067 15.66C22.5667 15.3 22.2334 15.02 21.8067 14.82C21.3934 14.6067 20.9201 14.5 20.3867 14.5C19.6801 14.5 19.0534 14.6267 18.5067 14.88C17.9734 15.12 17.4201 15.5467 16.8467 16.16L15.5467 14.92C16.1867 14.2267 16.9267 13.7 17.7667 13.34C18.6067 12.9667 19.4934 12.78 20.4267 12.78C21.3334 12.78 22.1334 12.9467 22.8267 13.28C23.5334 13.6133 24.0867 14.08 24.4867 14.68C24.9001 15.2667 25.1067 15.9333 25.1067 16.68C25.1067 17.4133 24.8601 18.0733 24.3667 18.66C23.8867 19.2333 23.2534 19.6333 22.4667 19.86C23.4134 20.06 24.1667 20.46 24.7267 21.06C25.2867 21.6467 25.5667 22.34 25.5667 23.14C25.5667 23.9267 25.3467 24.6267 24.9067 25.24C24.4801 25.8533 23.8801 26.34 23.1067 26.7C22.3334 27.0467 21.4534 27.22 20.4667 27.22Z" fill="white"/>
                    </svg>
                </div>
                <div className="  ">
                <div className="flex flex-col py-6 px-4 gap-6 items-center border-[0.5px] border-[#D8D3CE]">
                    <Image className="sm:hidden" src="/images/paleale.png" alt="Ejemplo" width={140} height={140}/>
                    <Image className="hidden sm:flex" src="/images/2paleale.png" alt="Ejemplo" width={140} height={140}/>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-bold font-redhat text-[11px] leading-3 uppercase tracking-[2px] text-[#6E6762] ">la quince</p>
                            <p className="font-medium font-saaseriesb text-[32px] leading-8 uppercase text-[#262626]">roots</p>
                            <p className="font-normal font-saaseriesb text-[24px] leading-6 uppercase text-[#F68217]">Pale ale</p>
                        </div>
                        <p className="line-clamp-4 font-redhat font-medium text-[14px] leading-5 px-4 text-center text-[#6E6762] tracking-[0.3px] sm:text-[14px] sm:leading-5"><span className="font-bold sm:text-[14px] sm:leading-5">Vol. Alcohol: <span className="font-medium">4.5º.</span> Perfil sensorial: </span>Elaborada con lúpulos puramente tropicales como lo son Ahtanum, Talus, Mosaic, Citra. Su aroma tiene un fuerte tono cítrico con sutiles tonos de resina y pino que dan paso a suaves frutas tropicales. De sabor ligeramente amargo tiene el equilibrio perfecto que permite también degustar la piel de los cítricos. Su color, olor y sabor tropical, es un claro homenaje a la costa oeste. </p>
                        <p className="font-normal font-saaseriesc text-[12px] leading-[14px] tracking-[1px] text-[#262626] uppercase underline underline-offset-[5px] ">ver más</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cervezas;
