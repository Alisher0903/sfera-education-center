"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("w-full", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between p-4 text-left text-2xl font-bold transition-all duration-300 ease-in-out",
          isOpen
            ? "bg-[#1CA855] text-white rounded-t-lg"
            : "bg-white hover:bg-[#1CA855] hover:text-white text-black rounded-lg"
        )}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <div className="p-4 bg-[#1CA855] text-white rounded-b-lg text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
