"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import colors from "@/lib/colors";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = [
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        imageRef.current,
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
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="py-12 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row py-20 justify-between items-center">
          <div className="md:w-1/3 flex flex-col justify-center md:text-left mb-10 md:mb-0">
            <h2
              className="text-4xl font-bold uppercase mb-2"
              style={{ color: colors.green }}
              ref={titleRef}
            >
              Sfera Akademiyasi
            </h2>
            <h3
              className="text-3xl font-bold uppercase mb-6 text-center"
              style={{ color: colors.green }}
              ref={subtitleRef}
            >
              Qadriyatlari
            </h3>
            <p
              className="max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-center"
              style={{ color: colors.grayText }}
              ref={descriptionRef}
            >
              SFERA AKADEMIYASI HAR BIR O‘QUVCHINING SALOHIYATINI OCHISH,
              ZAMONAVIY BILIM VA KO‘NIKMALAR BILAN QUROLLANTIRSHGA INTILADI.
            </p>
          </div>

          <div
            className="md:w-2/3 flex justify-center items-center"
            ref={imageRef}
          >
            <Image
              src="/home/achievements.png"
              width={800}
              height={800}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
