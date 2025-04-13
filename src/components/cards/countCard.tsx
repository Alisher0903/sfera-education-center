import Image from "next/image"
import colors from "@/lib/colors"

interface CountCardProps {
    img: string
    title: string
    value: number
    suffix?: string
}

export function CountCard({ img, title, value, suffix = "" }: CountCardProps) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-lg gap-10" style={{ backgroundColor: colors.white }}>
            <Image
                src={img}
                alt={`${title} icon`}
                width={200}
                height={200}
                className="object-contain"
            />
            <div className="flex items-center gap-5">
                <h3 className="text-2xl font-bold" style={{ color: colors.black }}>{title}</h3>
                <div className="flex items-baseline">
                    <span className="text-4xl font-bold" style={{ color: colors.green }}>{value}</span>
                    <span className="text-4xl font-bold" style={{ color: colors.green }}>{suffix}</span>
                </div>
            </div>
        </div>
    )
}
