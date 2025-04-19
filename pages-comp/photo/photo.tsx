"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import colors from "@/lib/colors"
import { URL } from "@/helpers/api"
import { photo } from "@/types/cards"



export default function PhotoSplide({ photosData }: any) {
    console.log(photosData);

    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [itemsToShow, setItemsToShow] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1)
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2)
            } else {
                setItemsToShow(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalSlides = photosData.length - itemsToShow + 1

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide()
        }, 5000)

        return () => clearTimeout(timer)
    }, [currentIndex])

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mt-30">
                <SectionTitle title="APLER OYINING ENG YAXSHI O'QUVCHILARI" />
            </div>
            <div className="max-w-7xl mx-auto pb-10">
                <div ref={carouselRef} className="overflow-hidden">
                    <div
                        className="flex gap-7 rounded-2xl transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {photosData.map((photo: photo, index: number) => (
                            <div
                                key={photo.id}
                                className="relative px-2"
                                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex flex-col items-center my-20">
                                    <div
                                        className={`relative w-[500px] h-[400px] transition-all duration-300 ${hoveredIndex === index ? "scale-110 z-10" : ""
                                            }`}
                                    >
                                        <div className="w-full h-full overflow-hidden rounded-2xl">
                                            <Image
                                                src={`${URL}${photo.photo}`}
                                                alt={photo.title}
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <p
                                        className="pt-5 text-xl"
                                        style={{
                                            color: hoveredIndex === index ? colors.green : colors.grayText,
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
    )
}
