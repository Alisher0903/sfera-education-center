"use client";

import React, {useState, useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import colors from "@/lib/colors";
import {URL} from "@/helpers/api";
import {photo} from "@/types/cards";
import {cn} from "@/lib/utils";
import {raleway} from "@/app/fonts/fonts";

gsap.registerPlugin(ScrollTrigger);

interface PhotoSplideProps {
    photosData: photo[];
}

export default function PhotoSplide({photosData}: PhotoSplideProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [dragOffset, setDragOffset] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const [itemsToShow, setItemsToShow] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = photosData?.length - itemsToShow + 1;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setDragOffset(0);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
        setDragOffset(0);
    };

    useEffect(() => {
        if (hoveredIndex !== null || isDragging) return;

        const timer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex, hoveredIndex, isDragging]);

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setDragOffset(0);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        const distance = clientX - startX;
        setDragOffset(distance);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        const threshold = 50;
        if (Math.abs(dragOffset) > threshold) {
            if (dragOffset > 0) prevSlide();
            else nextSlide();
        } else setDragOffset(0);
    };

    useGSAP(
        () => {
            if (!titleRef.current) return;

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

            const slides = gsap.utils.toArray<HTMLElement>(".photo-slide");

            slides.forEach((slide, index) => {
                const image = slide.querySelector("img") as HTMLElement;
                const title = slide.querySelector("p") as HTMLElement;

                const elements = [image, title].filter(Boolean) as HTMLElement[];

                elements.forEach((element, i) => {
                    gsap.fromTo(
                        element,
                        {opacity: 0, y: 50},
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power3.out",
                            delay: (index % itemsToShow) * 0.3 + i * 0.3,
                            scrollTrigger: {
                                trigger: element,
                                start: "top 90%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                });
            });
        },
        {scope: sectionRef, dependencies: []}
    );

    const slideWidthPercentage = 100 / itemsToShow;
    const translateX =
        -currentIndex * slideWidthPercentage +
        (dragOffset / (carouselRef.current?.offsetWidth || 1)) *
        slideWidthPercentage;

    if (!photosData || photosData.length === 0) {
        return <div className={cn("text-center py-10", raleway.className)}>Fotosuratlar mavjud emas.</div>;
    }

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
            <div className="mt-10" ref={titleRef}>
                <SectionTitle title="FOTOSURATLAR"/>
            </div>
            <div className="max-w-7xl mx-auto pb-10">
                <div
                    ref={carouselRef}
                    className="overflow-hidden cursor-grab select-none"
                    onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleDragStart(e.clientX)
                    }
                    onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleDragMove(e.clientX)
                    }
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    <div
                        className="flex gap-4 sm:gap-6 lg:gap-7 rounded-2xl transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(${translateX}%)`,
                        }}
                    >
                        {photosData.map((photo: photo, index: number) => (
                            <div
                                key={photo.id}
                                className="photo-slide relative px-2"
                                style={{flex: `0 0 ${100 / itemsToShow}%`}}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex flex-col items-center my-10 sm:my-16 lg:my-20">
                                    <div
                                        className={`relative w-full aspect-[5/4] transition-all duration-300 ${
                                            hoveredIndex === index ? "scale-105 z-10" : ""
                                        }`}
                                    >
                                        <div className="w-full h-full overflow-hidden rounded-2xl">
                                            <Image
                                                src={`${URL}${photo.photo}`}
                                                alt={photo.title}
                                                fill
                                                className="object-cover rounded-2xl"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                    <p
                                        className={cn("pt-4 text-lg sm:text-xl", raleway.className)}
                                        style={{
                                            color:
                                                hoveredIndex === index ? colors.green : colors.grayText,
                                            marginTop: "0.5rem",
                                            textAlign: "center",
                                            transition: "color 0.3s",
                                        }}
                                    >
                                        {photo.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
