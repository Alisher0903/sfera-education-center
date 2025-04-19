import Image from 'next/image'
import HoveredButton from "@/components/buttons/hovered-button";
import {cn} from "@/lib/utils";
import {color} from "@/lib/colors";

const Hero = () => {
    return (
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
                    <h1 className={cn("uppercase text-6xl font-bold tracking-wide mb-5", color('text').white)}>
                        kelajak kasblar markazi
                    </h1>
                    <p className={cn("uppercase text-2xl font-semibold mb-5", color('text').white)}>
                        sfera academy bilan <span className={cn(color('text').green)}>osonroq</span> organing
                    </p>
                    <HoveredButton
                        className={cn(
                            'py-4 hover:border-white hover:bg-transparent',
                            color('bg').green,
                            color('text').white,
                            color('border').green)
                        }
                        name={'BEPUL BIRINCHI DARS'}

                    />
                    <HoveredButton
                        className={'py-4 bg-slate-950 text-white border-white hover:bg-white hover:text-black'}
                        name={'BIZ BILAN BOG\'LANISH'}
                        style={{}}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;