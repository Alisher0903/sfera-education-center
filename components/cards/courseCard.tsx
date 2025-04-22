import Image from "next/image";
import Link from "next/link";
import { IProps } from "@/types/cards";
import { color } from "@/lib/colors";
import { URL } from "@/helpers/api";
import { cn, sliceText } from "@/lib/utils";

export default function CourseCard({
  id,
  name,
  photo = "",
  subtitle = "",
  about = "",
}: IProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-[384px] aspect-[3/4] rounded-lg overflow-hidden border border-green-500 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-white"
      )}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 rounded-lg ">
        <Image
          src={photo ? `${URL}${photo}` : "/home/1.png"}
          alt={`Course: ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
          className="object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-50"
        />
      </div>

      {/* Hover Overlay */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black/20 pointer-events-none"
        )}
      >
        <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center text-center">
          <h3
            className={cn(
              "text-xl sm:text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-2",
              color("text").green
            )}
          >
            {name}
          </h3>
          <p
            className={cn(
              "text-xs sm:text-sm mb-6 sm:mb-10",
              color("text").white
            )}
          >
            {subtitle}
          </p>
          <Link
            href={`/courses/${id}`}
            aria-label={`Learn more about ${name} course`}
            className={cn(
              "inline-block px-4 py-1 sm:px-6 sm:py-2 bg-transparent border rounded-xl transition-all duration-200 transform group-hover:scale-110 z-30 pointer-events-auto",
              color("text").white,
              color("border").white
            )}
          >
            Batafsil
          </Link>
        </div>
        <div
          className={cn(
            "p-4 sm:p-6 text-center min-h-[8rem] sm:min-h-[10rem] rounded-b-lg",
            color("bg").green
          )}
        >
          <p className={cn("text-sm sm:text-base", color("text").white)}>
            {sliceText(about, 100)}
          </p>
        </div>
      </div>

      {/* Default Bottom Description */}
      <div className="relative h-full flex flex-col z-10">
        <div className="flex-1" />
        <div
          className={cn(
            "p-4 sm:p-6 text-center min-h-[8rem] sm:min-h-[10rem] rounded-b-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out",
            color("bg").white
          )}
        >
          <p className={cn("text-sm sm:text-base  ", color("text").grayText)}>
            {sliceText(about, 100)}
          </p>
        </div>
      </div>
    </div>
  );
}
