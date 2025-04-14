"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import colors from "@/lib/colors"

// This data would come from an API in the future
const photoData = [
    {
        id: 1,
        imageUrl: "/home/team.png",
        title: "Front-End",
    },
    {
        id: 2,
        imageUrl: "/home/team.png",
        title: "Back-End",
    },
    {
        id: 3,
        imageUrl: "/home/team.png",
        title: "Frontend",
    },
    {
        id: 4,
        imageUrl: "/home/team.png",
        title: "Frontend",
    },
    {
        id: 5,
        imageUrl: "/home/team.png",
        title: "Frontend",
    },
]

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Calculate how many items to show based on screen width
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

        // Set initial value
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Clean up
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalSlides = photoData.length - itemsToShow + 1

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide()
        }, 5000)

        return () => clearTimeout(timer)
    }, [currentIndex])

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className=" mt-30">
                <SectionTitle title="APLER OYINING ENG YAXSHI O'QUVCHILARI" />
            </div>
            <div className="max-w-7xl mx-auto ">
                {/* Carousel container */}
                <div ref={carouselRef} className="overflow-hidden">
                    {/* Slides */}
                    <div
                        className="flex gap-7 rounded-2xl transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {photoData.map((photo, index) => (
                            <div
                                key={photo.id}
                                className="relative px-2"
                                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex flex-col items-center my-20">
                                    <div
                                        className={`relative w-full h-[250px] transition-all duration-300 ${hoveredIndex === index ? "scale-110 z-10" : ""
                                            }`}
                                    >
                                        <div className="w-full h-full overflow-hidden rounded-2xl ">
                                            <Image
                                                src={photo.imageUrl}
                                                alt={photo.title}
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>
                                    </div>


                                    <p
                                        style={{
                                            color: hoveredIndex === index ? colors.green : colors.grayText,
                                            marginTop: "0.5rem", // mt-2 ga teng
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


                {/* Navigation arrows
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 hover:text-gray-900 focus:outline-none transition-all z-20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-gray-800 hover:text-gray-900 focus:outline-none transition-all z-20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button> */}


            </div>
        </div>
    )
}
