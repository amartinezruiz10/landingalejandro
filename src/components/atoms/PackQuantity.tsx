'use client'
import React, { useState } from "react";

const PackQuantity = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [quantity, setQuantity] = useState(2);

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        setIsMenuVisible(false);
    };

    return (
        <div className="relative">
            <button
                className="font-saaseriesc flex flex-row justify-between w-full bg-[#000000] text-[#fff] px-[49.75px] py-[19px] text-[12px] leading-[14px] tracking-[1px] items-center font-normal"
                onClick={toggleMenuVisibility}
            >
                CANTIDAD: {quantity}
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isMenuVisible ? "transform rotate-180" : ""}
                >
                    <path d="M8.74999 8.78145L12.05 5.48145L12.9927 6.42411L8.74999 10.6668L4.50732 6.42411L5.44999 5.48145L8.74999 8.78145Z" fill="#F68217"/>
                </svg>
            </button>
            {isMenuVisible && (
                <div className="absolute bottom-5 right-[26px] bg-[#fff] text-[#F68217] border border-[#F68217] shadow-lg rounded-md">
                    <div className="flex flex-col p-2">
                        {[4, 3, 2, 1].map((option) => (
                            <button
                                key={option}
                                className="w-full py-1 text-center text-xs text-gray-900 hover:bg-gray-200 rounded-md"
                                onClick={() => handleQuantityChange(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackQuantity;
