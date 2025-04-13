import Image from "next/image"
import { FeatureCardProps } from "@/types/cards"
import colors from "@/lib/colors"

export default function FeatureCard({
  title,
  description,
  highlight,
  iconSrc,
  variant = "green"
}: FeatureCardProps) {
  const isGreen = variant === "green"

  return (
    <div
      className={`rounded-lg p-6 h-full flex flex-col justify-between ${
        isGreen ? "text-white" : "bg-white border-2"
      }`}
      style={{
        backgroundColor: isGreen ? colors.green : colors.white,
        borderColor: isGreen ? undefined : colors.green,
      }}
    >
      <div>
        <h3
          className={`text-xl font-bold mb-2`}
          style={{ color: isGreen ? colors.yellow : colors.blue }}
        >
          {title}
        </h3>
        <p className="mb-8 text-sm" style={{color: isGreen ? colors.white : colors.black}}>{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p
          className={`text-sm font-medium`}
          style={{ color: isGreen ? colors.white : colors.green }}
        >
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
