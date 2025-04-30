"use client";

import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CountCard} from "@/components/cards/countCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                titleRef.current,
                {opacity: 0, y: -50},
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 100%",
                        toggleActions: "play none none none",
                    },
                }
            );

            const cards = gsap.utils.toArray<HTMLElement>(".count-card");
            const borders = gsap.utils.toArray<HTMLElement>(".border-anim");

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {opacity: 0, y: 60, scale: 0.95},
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        delay: index * 0.15,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 140%",
                            toggleActions: "play none none none",
                        },
                        onComplete: () => {
                            const border = borders[index];
                            if (border) {
                                gsap.to(border, {
                                    scaleX: 1,
                                    scaleY: 1,
                                    duration: 0.5,
                                    ease: "power2.out",
                                });
                            }
                        },
                    }
                );

                if (borders[index]) {
                    gsap.set(borders[index], {scaleX: 0, scaleY: 0});
                }
            });
        },
        {scope: sectionRef, dependencies: []}
    );

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="pt-20">
                <div className="mb-10" ref={titleRef}>
                    <SectionTitle title="BIZ HAQIMIZDA"/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2" ref={sectionRef}>
                    <div className="xl:rounded-b-[80px] rounded-b-[60px] overflow-hidden relative">
                        <div
                            className="lg:border-b-1 lg:border-r-1 border-b-none border-r-none border-r-[#1CA855] border-b-slate-300 border-anim">
                            <div className="count-card">
                                <CountCard
                                    img="/home/count.png"
                                    title="Bitirgan o'quvchilar"
                                    value={200}
                                    suffix="+"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="xl:rounded-b-[80px] rounded-b-[60px] overflow-hidden relative">
                            <div
                                className="lg:border-l-1 lg:border-b-1 border-b-none border-r-none border-l-[#1CA855] border-b-slate-300 border-anim">
                                <div className="count-card">
                                    <CountCard
                                        img="/home/courses2.png"
                                        title="Loyihalar"
                                        value={20}
                                        suffix="+"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="xl:rounded-t-[80px] rounded-t-[60px] overflow-hidden relative">
                            <div
                                className="lg:border-t-1 lg:border-r-1 border-r-none border-t-none border-r-[#1CA855] border-t-slate-300 border-anim">
                                <div className="count-card">
                                    <CountCard
                                        img="/home/courses1.png"
                                        title="Ish olib borilmoqda"
                                        value={3}
                                        suffix=" YIL"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="xl:rounded-t-[80px] rounded-t-[60px] overflow-hidden relative">
                            <div
                                className="lg:border-t-1 lg:border-l-1 border-l-none border-t-none border-l-[#1CA855] border-t-slate-300 border-anim">
                                <div className="count-card">
                                    <CountCard
                                        img="/home/courses.png"
                                        title="Jamoamiz a'zolari"
                                        value={20}
                                        suffix="+"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
