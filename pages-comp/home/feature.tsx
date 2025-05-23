"use client";

import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import FeatureCard from "@/components/cards/featureCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {raleway} from "@/app/fonts/fonts";

// GSAP plaginini ro'yxatdan o'tkazish
gsap.registerPlugin(ScrollTrigger);

// Feature ma'lumotlari
const features = [
    {
        title: "Malakali O’qituvchilar",
        description:
            "Yetuk mutaxassislar sizga chuqur bilim va amaliy ko‘nikmalarni kafolatlaydi.",
        highlight: "3 yillik tajribaga ega ustozlar jamoasi",
        iconSrc: "/home/featur.png",
        variant: "green",
    },
    {
        title: "Bepul Networking",
        description:
            "O‘z sohasidagi professional bilan aloqalar o‘rnatish imkonini beradi.",
        highlight: "Hamfikrlar va sohaga oid aloqalar",
        iconSrc: "/home/feature1.png",
        variant: "white",
    },
    {
        title: "Yuqori Tajriba",
        description:
            "O‘quv davomida real loyihalar orqali amaliy tajriba orttirasiz.",
        highlight: "Real loyihalar bilan o‘rganish imkoniyati",
        iconSrc: "/home/feature2.png",
        variant: "white",
    },
    {
        title: "Sifatli Ta’lim",
        description:
            "Darslar innovatsion yondashuv asosida o‘tilib, bilimlar mustahkamlanadi.",
        highlight: "Nazariy va amaliy bilimlar uyg‘unligi",
        iconSrc: "/home/feature3.png",
        variant: "green",
    },
];

const Feature: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
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
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Animate the cards
            const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
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
                        delay: index * 0.25,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        },
        {scope: sectionRef, dependencies: []}
    );

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
            <div className="max-w-7xl mx-auto py-10 sm:px-6 md:px-10 lg:px-16 xl:px-20">
                <div className="mb-10" ref={titleRef}>
                    <SectionTitle title="NEGA BIZNI TANLASH KERAK?"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <FeatureCard
                                title={feature.title}
                                description={feature.description}
                                highlight={feature.highlight}
                                iconSrc={feature.iconSrc}
                                variant={feature.variant}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
