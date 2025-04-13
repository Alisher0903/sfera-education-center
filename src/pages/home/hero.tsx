import Image from 'next/image'
import HoveredButton from "@/components/buttons/hovered-button";
import { cn } from "@/lib/utils";


export const infoCards = [
    {
        image: "/home/image.png",
        title: "O‘qituvchilarimiz katta tajribaga ega",
        description:
            "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
    },
    {
        image: "/home/image.png",
        title: "O‘qituvchilarimiz katta tajribaga ega",
        description:
            "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
    },
    {
        image: "/home/image.png",
        title: "O‘qituvchilarimiz katta tajribaga ega",
        description:
            "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
    },
    {
        image: "/home/image.png",
        title: "O‘qituvchilarimiz katta tajribaga ega",
        description:
            "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
    },
];

const Hero = () => {
    return (
        <div>
            <section className={'relative'}>
                <Image
                    src="/home/hero-gif.gif"
                    alt="Gif"
                    className={'w-full h-[100vh] object-cover'}
                    width={400}
                    height={300}
                    unoptimized
                />
                <div className={'absolute top-1/2 -translate-y-1/2 flex w-full'}>
                    <div className={'mx-auto space-x-4 text-center'}>
                        <h1 className={cn("uppercase text-white text-6xl font-bold tracking-wide mb-5")}>kelajak kasblar markazi</h1>
                        <p className={cn("uppercase text-2xl font-semibold mb-5 text-white")}>sfera academy bilan osonroq organing</p>
                        <HoveredButton
                            className={'py-4 bg-green-600 text-white border-green-600 hover:border-white hover:bg-transparent'}
                            name={'BEPUL BIRINCHI DARS'}
                        />
                        <HoveredButton
                            className={'py-4 bg-slate-950 text-white border-white hover:bg-white hover:text-black'}
                            name={'BIZ BILAN BOG\'LANISH'}
                        />
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Hero;