"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HoveredButton from "@/components/buttons/hovered-button";
import { cn } from "@/lib/utils";
import { color } from "@/lib/colors";
import { RegistrationModal } from "@/components/auth/register";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const elements = [
        titleRef.current,
        subtitleRef.current,
        buttonContainerRef.current,
      ].filter(Boolean) as HTMLElement[];

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.3,
            scrollTrigger: {
              trigger: element,
              start: "top 100%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="relative" ref={sectionRef}>
      <Image
        src="/home/hero-gif.gif"
        alt="Gif"
        className="w-full h-[100vh] object-cover"
        width={400}
        height={300}
        unoptimized
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 flex w-full px-4"
        ref={contentRef}
      >
        <div className="mx-auto text-center max-w-6xl">
          <h1
            className={cn(
              "uppercase text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-4 md:mb-5",
              color("text").white
            )}
            ref={titleRef}
          >
            kelajak kasblar markazi
          </h1>
          <p
            className={cn(
              "uppercase text-lg sm:text-xl md:text-2xl font-normal mb-4 md:mb-5",
              color("text").white
            )}
            ref={subtitleRef}
          >
            sfera academy bilan{" "}
            <span className={cn(color("text").green) + " " + "font-bold"}>
              osonroq
            </span>{" "}
            organing
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            ref={buttonContainerRef}
          >
            <div className="inline-block w-full sm:w-auto">
              <HoveredButton
                className={cn(
                  "py-3 sm:py-4 w-full sm:w-auto px-6  hover:border-white hover:bg-transparent text-sm sm:text-base",
                  color("bg").green,
                  color("text").white,
                  color("border").green
                )}
                name="BEPUL BIRINCHI DARS"
              />
            </div>
            <div className="inline-block w-full sm:w-auto">
              <HoveredButton
                onClick={() => setIsOpen(true)}
                className="py-3 sm:py-4 w-full sm:w-auto px-6 bg-slate-950 text-white border-white hover:bg-white hover:text-black text-sm sm:text-base"
                name="BIZ BILAN BOG'LANISH"
              />
            </div>
          </div>
        </div>
      </div>
      <RegistrationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Hero;
