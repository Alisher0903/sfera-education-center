"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CourseCardProps } from "@/types/cards"

export default function CourseCard({ id, title, description, imageUrl, detailsUrl, text,
}: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full max-w-sm h-[500px] rounded-lg overflow-hidden transition-all duration-300 border-2 border-[#1CA855]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 transition-all duration-300">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`object-cover transition-all duration-300 ${isHovered ? "brightness-50" : ""
            }`}
          priority
        />
      </div>
      {isHovered ? (
        <div className="relative h-full flex flex-col z-10">
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-[#1CA855] text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white text-sm pb-10">{text}</p>
            <Link
              href={detailsUrl}
              className="inline-block px-6 py-1 bg-transparent text-white border rounded-xl border-white"
            >
              Batafsil
            </Link>
          </div>
          <div className="bg-[#1CA855] p-6 text-center">
            <p className="text-white  text-base">{description}</p>
          </div>
        </div>
      ) : (
        <div className="relative h-full flex flex-col z-10">
          <div className="flex-1"></div>
          <div className="bg-white p-6 text-center">
            <p className="text-[#777777] text-base font-raleway">{description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
