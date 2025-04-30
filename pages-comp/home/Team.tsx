"use client";

import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamMemberCard from "@/components/cards/TeamMember";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {teacher, TeamMemberCardProps} from "@/types/cards";

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC<teacher> = ({teacherData}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<HTMLDivElement>(null);

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

            const cards = gsap.utils.toArray<HTMLElement>(".team-member-card");
            const nextButton = document.querySelector(
                ".swiper-button-next"
            ) as HTMLElement;
            const prevButton = document.querySelector(
                ".swiper-button-prev"
            ) as HTMLElement;
            const navButtons = [nextButton, prevButton].filter(Boolean);

            navButtons.forEach((button) => {
                gsap.set(button, {opacity: 0, scale: 0.8});
            });

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
                        onComplete: () => {
                            navButtons.forEach((button) => {
                                gsap.to(button, {
                                    opacity: 1,
                                    scale: 1,
                                    duration: 0.5,
                                    ease: "power2.out",
                                });
                            });
                        },
                    }
                );
            });
        },
        {scope: sectionRef, dependencies: []}
    );

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10" ref={titleRef}>
                    <SectionTitle title="BIZNING JAMOA"/>
                </div>

                <div ref={swiperRef}>
                    <Swiper
                        className="relative"
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        navigation
                        breakpoints={{
                            0: {slidesPerView: 1},
                            640: {slidesPerView: 2},
                            768: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                            1280: {slidesPerView: 4},
                        }}
                    >
                        {teacherData.map((member: TeamMemberCardProps) => (
                            <SwiperSlide key={member.id}>
                                <div className="team-member-card w-full">
                                    <TeamMemberCard
                                        name={member.name}
                                        level={member.level}
                                        photo={member.photo}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style jsx global>{`
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: white;
                        background-color: #1ca855;
                        padding: 10px;
                        border-radius: 9999px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        width: 40px;
                        height: 40px;
                    }

                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 16px;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Team;
