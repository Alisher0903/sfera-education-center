"use client";

import {useState, ReactNode} from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";

interface AccordionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

const Accordion = (
    {
        title,
        children,
        defaultOpen = false,
        className = "",
    }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`w-full ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 text-gray-800 transition-all duration-300 ease-in-out",
                    isOpen ? "rounded-t-lg" : "rounded-lg"
                )}
            >
                <span className="font-medium">{title}</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;