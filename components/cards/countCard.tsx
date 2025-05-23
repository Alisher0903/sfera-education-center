import Image from "next/image"
import colors from "@/lib/colors"
import {cn} from "@/lib/utils";
import {ltWaveUI, raleway} from "@/app/fonts/fonts";

interface CountCardProps {
    img: string
    title: string
    value: number
    suffix?: string
}

export function CountCard({img, title, value, suffix = ""}: CountCardProps) {
    return (
        <div className="flex flex-col items-center   text-center p-6  gap-10" style={{backgroundColor: colors.white}}>
            <Image
                src={img}
                alt={`${title} icon`}
                width={200}
                height={200}
                className="object-contain"
            />
            <div className="flex items-center gap-5">
                <h3 className={cn("text-2xl font-[600]", raleway.className)} style={{color: colors.black}}>{title}</h3>
                <div className={cn("flex items-baseline font-[400]", ltWaveUI.className)}>
                    <span className="text-4xl font-bold" style={{color: colors.green}}>{value}</span>
                    <span className="text-4xl font-bold" style={{color: colors.green}}>{suffix}</span>
                </div>
            </div>

        </div>
    )
}
