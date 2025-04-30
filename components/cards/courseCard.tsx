import Image from "next/image";
import Link from "next/link";
import {IProps} from "@/types/cards";
import colors, {color} from "@/lib/colors";
import {URL} from "@/helpers/api";
import {cn, sliceText} from "@/lib/utils";
import {montserrat, raleway} from "@/app/fonts/fonts";

export default function CourseCard(
    {
        id,
        name,
        photo = "",
        subtitle = "",
        about = "",
    }: IProps) {
    return (
        <div
            className={cn(
                "group relative w-full max-w-[384px] aspect-[3/4] overflow-hidden  rounded-b-sm transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-white"
            )}
        >
            {/* Image Layer */}
            <div className="absolute inset-0  ">
                <Image
                    src={photo ? `${URL}${photo}` : "/home/1.png"}
                    alt={`Course: ${name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
                    className="object-cover  transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-50"
                />
            </div>

            {/* Hover Overlay */}
            <div
                className={cn(
                    "absolute inset-0 flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black/20 pointer-events-none"
                )}
            >
                <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center text-center">
                    <h3
                        className={cn(
                            "text-xl sm:text-2xl transition-transform duration-300 group-hover:-translate-y-2 font-[600]",
                            color("text").green,
                            raleway.className
                        )}
                    >
                        {name}
                    </h3>
                    <p
                        className={cn(
                            "text-xs sm:text-sm mb-6 font-[400]",
                            color("text").white,
                            raleway.className
                        )}
                    >
                        {subtitle}
                    </p>
                    <Link
                        href={`/courses/${id}`}
                        aria-label={`Learn more about ${name} course`}
                        className={cn(
                            "font-[600] inline-block px-4 py-1 sm:px-6 sm:py-2 bg-transparent border rounded-xl transition-all duration-200 transform group-hover:scale-110 z-30 pointer-events-auto",
                            color("text").white,
                            color("border").white,
                            montserrat.className
                        )}
                    >
                        Batafsil
                    </Link>
                </div>
                <div
                    className={cn(
                        "p-4 sm:p-6  text-center min-h-[8rem] sm:min-h-[10rem] rounded-b-sm",
                        color("bg").green
                    )}
                >
                    <p className={cn("text-sm sm:text-base font-[600]", color("text").white, raleway.className)}>
                        {sliceText(about, 100)}
                    </p>
                </div>
            </div>

            {/* Default Bottom Description */}
            <div className="relative h-full  flex flex-col z-10">
                <div className="flex-1 "/>
                <div
                    style={{borderColor: colors.green}}
                    className={cn(
                        "p-4 sm:p-6 text-center min-h-[8rem] sm:min-h-[10rem] border-l border-r border-b rounded-b-sm overflow-hidden group-hover:opacity-0 transition-opacity duration-300 ease-in-out",
                        color("bg").white
                    )}
                >
                    <p className={cn("text-sm sm:text-base font-[400]", color("text").grayText, raleway.className)}>
                        {sliceText(about, 100)}
                    </p>
                </div>
            </div>
        </div>
    );
}
