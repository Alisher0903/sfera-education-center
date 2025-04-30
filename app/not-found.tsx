import {cn} from "@/lib/utils";

export const dynamic = 'force-dynamic'

import Image from "next/image";
import React from "react";
import GridShape from "@/components/other/grid-shape";
import HoveredButton from "@/components/buttons/hovered-button";
import {ltWaveUI, raleway} from "@/app/fonts/fonts";

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
            <GridShape/>
            <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
                <h1 className={cn(
                    "mb-8 font-bold text-gray-800 text-md xl:text-2xl",
                    ltWaveUI.className
                )}>
                    ERROR
                </h1>

                <Image
                    src="/error/404.svg"
                    alt="404"
                    width={472}
                    height={152}
                />

                <p className={cn(
                    "mt-10 mb-6 text-base text-gray-700 sm:text-lg",
                    raleway.className
                )}>
                    We can’t seem to find the page you are looking for!
                </p>

                <HoveredButton name={"Back to Home Page"} link={"/"} className={"hover:bg-black"}/>
            </div>
        </div>
    );
}
