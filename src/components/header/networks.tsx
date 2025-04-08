"use client"

import React, {useState} from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import {header_data, headerStyles} from "@/lib/constants";

const Networks = ({language, changeLanguage}: { language: string, changeLanguage: (v: string) => void }) => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const {networkItems, translateItems} = header_data;
    const toggleLangDropdown = () => setIsLangOpen(!isLangOpen);

    return (
        <div className="flex items-center space-x-4">
            {networkItems.map(item => (
                <a
                    key={item.link}
                    href={item.link}
                    className={`${headerStyles.network} ${item.isStyle && 'font-semibold text-base flex items-center space-x-1'}`}
                >
                    {item.icon}
                    {item.name && <span className="tracking-wide">{item.name}</span>}
                </a>
            ))}
            <div className={cn("relative")}>
                <Image
                    src={translateItems.find((item) => item.id === language)?.path || '/lang/uz.svg'}
                    alt={language}
                    width={28}
                    height={20}
                    onClick={toggleLangDropdown}
                    className={cn("cursor-pointer")}
                />
                <div
                    className={cn(
                        "absolute top-10 right-0 w-32 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out",
                        isLangOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
                    )}
                >
                    {translateItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                changeLanguage(item.id)
                                toggleLangDropdown()
                            }}
                            className={cn(
                                "w-full px-4 py-2 text-left text-gray-800 hover:bg-green-50 transition-colors duration-200 flex items-center space-x-2 cursor-pointer",
                                language === item.id && "bg-green-100 text-green-600"
                            )}
                        >
                            <Image src={item.path} alt={item.name} width={24} height={16}/>
                            <span>{item.mobileLabel}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Networks;