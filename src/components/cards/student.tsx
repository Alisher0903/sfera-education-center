import Image from "next/image"
import Link from "next/link"

import { StudentTestimonialCardProps } from "@/types/cards"

export default function StudentTestimonialCard({ name, course, testimonial, imageSrc, readMoreUrl = "/", readMoreText = "Ko'proq",
}: StudentTestimonialCardProps) {
  return (
    <div className="rounded-2xl border-2 border-[#1CA855] bg-white overflow-hidden flex flex-col md:flex-row max-w-3xl">
      <div className="md:w-2/5 relative">
        <div className="aspect-square md:h-full relative">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 384px"
            priority
          />
        </div>
      </div>

      <div className="p-6 md:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="mb-4">
          Kurs: <span className="text-[#1CA855] font-medium">{course}</span>
        </p>

        <p className=" mb-1">
          {testimonial}
          {readMoreUrl && (
            <Link href={readMoreUrl} className="text-[#1CA855] hover:underline ml-1">
              {readMoreText}
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}
