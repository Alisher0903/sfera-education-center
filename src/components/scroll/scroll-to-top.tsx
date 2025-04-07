"use client"

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setIsVisible(true);
            else setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-5 right-3 z-[99]">
            <div
                onClick={scrollToTop}
                aria-label="scroll to top"
                className={`
                    flex h-10 w-10 cursor-pointer items-center justify-center 
                    rounded-md bg-slate-800 text-white shadow-md 
                    transition-all duration-300 ease-in-out
                    hover:bg-opacity-80
                    ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
            >
                <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
        </div>
    );
}