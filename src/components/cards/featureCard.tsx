import Image from "next/image"
import {FeatureCardProps} from "@/types/cards"

export default function FeatureCard({ title, description, highlight, iconSrc, variant }: FeatureCardProps) {
  return (
    <div
      className={`rounded-lg p-6 h-full flex flex-col justify-between ${
        variant === "green" ? "bg-[#1CA855] text-white" : "bg-white border-2 border-[#1CA855]"
      }`}
    >
      <div>
        <h3 className={`text-xl font-bold mb-2 ${variant === "green" ? "text-[#FFBB3C]" : "text-[#62C8FF]"}`}>
          {title}
        </h3>
        <p className="mb-8">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-sm font-medium ${variant === "green" ? "text-white" : "text-[#1CA855]"}`}>
          {highlight}
        </p>
        <div className="w-10 h-10 relative">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
