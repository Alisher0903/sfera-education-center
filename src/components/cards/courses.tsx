"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"
import colors from "@/lib/colors"

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} alt={props.title} />
  ),
)
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex h-full w-full items-center justify-center rounded-full", className)}
      style={{ backgroundColor: colors.grayText }}
      {...props}
    />
  ),
)
AvatarFallback.displayName = "AvatarFallback"

interface BackendCardProps {
  courseTitle: string
  startDate: string
  duration: string
  price: string
  instructorName: string
  instructorImage: string
  image: string
}

export default function BackendCard({
  courseTitle,
  startDate,
  duration,
  price,
  instructorName,
  instructorImage,
  image
}: BackendCardProps) {
  return (
    <div
      className="rounded-lg p-6 w-full"
      style={{ backgroundColor: colors.white, border: `1px solid ${colors.green}` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-medium mb-4" style={{ color: colors.green }}>
            {courseTitle}
          </h2>
          <div className="relative w-full h-32 md:h-40">
            <Image
              src={image}
              alt="Backend development illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span style={{ color: colors.grayText }}>Yangi guruh:</span>
              <span className="font-medium" style={{ color: colors.green }}>
                {startDate}
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{ color: colors.grayText }}>Davomiyligi:</span>
              <span className="font-medium" style={{ color: colors.green }}>
                {duration}
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{ color: colors.grayText }}>Narxi:</span>
              <span className="font-medium" style={{ color: colors.green }}>
                {price}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Avatar>
              <AvatarImage src={instructorImage} alt={instructorName} />
              <AvatarFallback>
                {instructorName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium" style={{ color: colors.black }}>
              {instructorName}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
