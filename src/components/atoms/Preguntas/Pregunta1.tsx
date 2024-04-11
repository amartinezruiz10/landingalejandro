'use client'
import React, { useState } from "react";

const Pregunta1 = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isArrowUp, setIsArrowUp] = useState(false);
  
    const toggleTextVisibility = () => {
      setIsTextVisible(!isTextVisible);
      setIsArrowUp(!isArrowUp);
    };
  
    return (
      <div className="flex flex-col">
        <div className="flex flex-row bg-[#262626] px-4 py-2 gap-2">
          <div className="flex flex-row gap-4">
            <p className="font-saaseriesb font-normal text-[18px] leading-[22px] tracking-[1px] uppercase text-[#fff]">
              1.
            </p>
            <p className="font-saaseriesb font-normal text-[18px] leading-[22px] tracking-[1px] uppercase text-[#fff]">
            ¿Cuando recibiré cada mes mis cervezas?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center" onClick={toggleTextVisibility}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isArrowUp ? "rotate-180" : ""}
            >
              <path
                d="M12.5 13.5442L17.45 8.59424L18.864 10.0082L12.5 16.3722L6.13599 10.0082L7.54999 8.59424L12.5 13.5442Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {isTextVisible && (
          <div className="bg-[#fff] p-4 shadow-md">
            <p className="font-redhat font-medium text-[14px] leading-5 text-[#6E6762] ">Cada tercer lunes del mes cambian las cervezas incluidas. Esta suscripción al durar 3 meses los cambios serán el 21 de Noviembre y el 19 de Diciembre.</p>
          </div>
        )}
      </div>
    );
  };

export default Pregunta1;