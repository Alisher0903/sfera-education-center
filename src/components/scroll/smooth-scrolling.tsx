"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface Props {
    children: ReactNode;
}

const SmoothScrollProvider = ({ children }: Props) => {
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, // scroll silliqligi uchun
            duration: 1.2, // optional
        });

        const raf = (time: number) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScrollProvider;
