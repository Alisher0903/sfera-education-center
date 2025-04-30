import Image from "next/image";
import {TeamMemberCardProps} from "@/types/cards";
import colors from "@/lib/colors";
import {URL} from "@/helpers/api";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {raleway} from "@/app/fonts/fonts";

export default function TeamMemberCard(
    {
        name,
        level,
        photo
    }: TeamMemberCardProps) {
    const network = [
        {alt: 'instagram', src: '/tarmoq/ant-design_instagram-filled.svg', href: 'https://www.instagram.com/sfera_academy.uz/'},
        {alt: 'facebook', src: '/tarmoq/gg_facebook.svg', href: 'https://www.facebook.com/profile.php?id=61561062031056'},
        {alt: 'twitter', src: '/tarmoq/ri_twitter-fill.svg', href: 'https://twitter.com/'},
        {alt: 'telegram', src: '/tarmoq/mingcute_telegram-fill.svg', href: 'https://t.me/sfera_academy_uz'},
    ]
    return (
        <div
            className="rounded-2xl overflow-hidden max-w-[384px]  w-full"
            style={{color: colors.white, border: `2px solid ${colors.green}`}}
        >
            <div className="aspect-square relative">
                <Image
                    src={`${URL}${photo}`}
                    alt={name}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                />
            </div>
            <div className="p-5">
                <h3 className={cn(
                    "text-xl font-[700] mb-1",
                    raleway.className
                )} style={{color: colors.green}}>
                    {name}
                </h3>
                <p className={cn("mb-5 font-[500]", raleway.className)} style={{color: colors.grayText2}}>
                    {level}
                </p>

                <div style={{color: colors.grayText}} className="flex gap-2">
                    {network.map(item => (
                        <Link href={item.href} key={item.alt} target={'_blank'}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={28}
                                height={28}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
