import Image from "next/image";
import {FeatureCardProps} from "@/types/cards";
import colors from "@/lib/colors";
import {cn} from "@/lib/utils";
import {raleway} from "@/app/fonts/fonts";

export default function FeatureCard(
    {
        title,
        description,
        highlight,
        iconSrc,
        variant = "green",
    }: FeatureCardProps) {
    const isGreen = variant === "green";

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
                    className={cn(
                        "text-xl mb-2 font-[800]",
                        raleway.className
                    )}
                    style={{color: isGreen ? colors.yellow : colors.blue}}
                >
                    {title}
                </h3>
                <p
                    className={cn(
                        "mb-8 text-md font-[400]",
                        raleway.className
                    )}
                    style={{color: isGreen ? colors.white : colors.black}}
                >
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p
                    className={cn(
                        "text-md font-[600]",
                        raleway.className
                    )}
                    style={{color: isGreen ? colors.white : colors.green}}
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
    );
}
