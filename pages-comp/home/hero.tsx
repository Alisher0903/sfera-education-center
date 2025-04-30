"use client";

import React, {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";
import HoveredButton from "@/components/buttons/hovered-button";
import {cn} from "@/lib/utils";
import {color} from "@/lib/colors";
import {RegistrationModal} from "@/components/auth/register";
import {montserrat, raleway} from "@/app/fonts/fonts";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLSpanElement>(null); // Reference for the animated word
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(
        () => {
            const elements = [
                titleRef.current,
                subtitleRef.current,
                buttonContainerRef.current,
            ].filter(Boolean) as HTMLElement[];

            elements.forEach((element, index) => {
                gsap.fromTo(
                    element,
                    {opacity: 0, y: 50},
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        delay: index * 0.3,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 100%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });


            const words = ["osonroq", "tezroq"];
            const tl = gsap.timeline({repeat: -1});

            words.forEach((word) => {
                tl.to(wordRef.current, {
                    duration: 0.5,
                    y: 20,
                    ease: "power2.out",
                })
                    .to(wordRef.current, {
                        duration: 0.5,
                        opacity: 0,
                        ease: "power2.out",
                        onComplete: () => {
                            if (wordRef.current) {
                                wordRef.current.textContent = word;
                                gsap.set(wordRef.current, {y: 0});
                            }
                        },
                    })
                    .to(wordRef.current, {
                        duration: 0.5,
                        opacity: 1,
                        ease: "power2.in",
                    })
                    .to({}, {duration: 5});
            });
        },
        {scope: sectionRef, dependencies: []}
    );

    return (
        <section className="relative" ref={sectionRef}>
            <Image
                src="/home/hero-gif.gif"
                alt="Gif"
                className="w-full h-[100vh] object-cover"
                width={400}
                height={300}
                unoptimized
            />
            <div
                className="absolute top-1/2 -translate-y-1/2 flex w-full px-4"
                ref={contentRef}
            >
                <div className="mx-auto text-center max-w-6xl">
                    <h1
                        className={cn(
                            "uppercase text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4 md:mb-5",
                            color("text").white,
                            raleway.className
                        )}
                        ref={titleRef}
                    >
                        kelajak kasblar markazi
                    </h1>
                    <p
                        className={cn(
                            "uppercase text-lg sm:text-xl md:text-2xl font-normal mb-4 md:mb-5",
                            color("text").white,
                            raleway.className
                        )}
                        ref={subtitleRef}
                    >
                        sfera academy bilan{" "}
                        <span
                            ref={wordRef}
                            className={cn(color("text").green, "font-bold uppercase")}
                        >
                            osonroq
                        </span>{" "}
                        organing
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                        ref={buttonContainerRef}
                    >
                        <div className="inline-block w-full sm:w-auto">
                            <HoveredButton
                                style={{border: "none"}}
                                className={cn(
                                    "py-3 sm:py-4 w-full sm:w-auto  px-6 hover:border-white  text-sm sm:text-base",
                                    color("bg").green,
                                    color("text").white,
                                    color("border").green,
                                    montserrat.className
                                )}
                                name="BEPUL BIRINCHI DARS"
                            />
                        </div>
                        <div className="inline-block w-full sm:w-auto">
                            <HoveredButton
                                onClick={() => setIsOpen(true)}
                                className={cn(
                                    "py-3 sm:py-4 w-full sm:w-auto px-6 bg-slate-950 text-white border-white hover:bg-white hover:text-black text-sm sm:text-base",
                                    montserrat.className
                                )}
                                name="BIZ BILAN BOG'LANISH"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </section>
    );
};

export default Hero;
