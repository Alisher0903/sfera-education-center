import Image from "next/image"
import Link from "next/link"
import { StudentTestimonialCardProps } from "@/types/cards"
import colors from "@/lib/colors"

export default function StudentTestimonialCard({
  name,
  course,
  testimonial,
  imageSrc,
  readMoreUrl = "/",
  readMoreText = "Ko'proq",
}: StudentTestimonialCardProps) {
  return (
    <div
      className="rounded-2xl border-2 overflow-hidden flex flex-col md:flex-row max-w-3xl"
      style={{ borderColor: colors.green, backgroundColor: colors.white }}
    >
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
        <h3 className="text-2xl font-bold mb-1" style={{ color:colors.green }}>
          {name}
        </h3>
        <p className="mb-4">
          Kurs: <span className="font-medium" style={{ color: colors.green }}>{course}</span>
        </p>

        <p className="mb-1">
          {testimonial}
          {readMoreUrl && (
            <Link
              href={readMoreUrl}
              className="hover:underline ml-1"
              style={{ color: colors.green }}
            >
              {readMoreText}
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}
