import Image from "next/image";
import Link from "next/link";
import {IProps} from "@/types/cards";
import {color} from "@/lib/colors";
import {URL} from "@/helpers/api";
import {cn, sliceText} from "@/lib/utils";

export default function CourseCard({id, name, photo, subtitle, about}: IProps) {
    return (
        <div
            className={cn(
                "group relative w-full max-w-[384px] aspect-[3/4] rounded-lg overflow-hidden border-1 border-custom-green transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105",
            )}
        >
            <div className="absolute inset-0 transition-all duration-500 ease-out">
                <Image
                    src={`${URL}${photo}`}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-50"
                />
            </div>

            <div
                className={cn(
                    "absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 bg-black/20"
                )}
            >
                <div className="p-4 sm:p-6 flex-1 flex flex-col items-center justify-center text-center">
                    <h3
                        className={cn(
                            "text-xl sm:text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-[-10px]",
                            color("text").green
                        )}
                    >
                        {name}
                    </h3>
                    <p
                        className={cn(
                            "text-xs sm:text-sm pb-6 sm:pb-10",
                            color("text").white
                        )}
                    >
                        {subtitle}
                    </p>
                    <Link
                        href={{pathname: `courses/${id}`}}
                        aria-label={`Learn more about ${name} course`}
                        className={cn(
                            "inline-block px-4 py-1 sm:px-6 sm:py-2 bg-transparent border rounded-xl hover:bg-green-600 hover:border-green-600 transition-all duration-200 transform group-hover:scale-110",
                            color("text").white,
                            color("border").white
                        )}
                    >
                        Batafsil
                    </Link>
                </div>
                <div
                    className={cn(
                        "p-4 sm:p-6 text-center h-32 sm:h-40 transition-opacity duration-300",
                        color("bg").green
                    )}
                >
                    <p className={cn("text-sm sm:text-base", color("text").white)}>
                        {sliceText(about, 100)}
                    </p>
                </div>
            </div>

            <div className="relative h-full flex flex-col z-10">
                <div className="flex-1"/>
                <div
                    className={cn(
                        "p-4 sm:p-6 text-center h-32 sm:h-40 group-hover:opacity-0 transition-opacity duration-300 ease-in-out",
                        color("bg").white
                    )}
                >
                    <p className={cn("text-sm sm:text-base", color("text").grayText)}>
                        {sliceText(about, 100)}
                    </p>
                </div>
            </div>
        </div>
    );
}