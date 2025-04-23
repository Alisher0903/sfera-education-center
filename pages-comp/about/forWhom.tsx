"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import colors from "@/lib/colors";

gsap.registerPlugin(ScrollTrigger);

const ForWhomSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".for-whom-item");

      items.forEach((item, index) => {
        const elements = item.querySelectorAll(
          "img, h3, p"
        ) as NodeListOf<HTMLElement>;

        elements.forEach((element, i) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.5 + i * 0.2,
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section className="w-full" ref={sectionRef}>
      <div className="my-10" ref={titleRef}>
        <SectionTitle title="KURSLARIMIZ KIMLARGA TOG'RI KELADI" />
      </div>
      <div style={{ backgroundColor: colors.green, color: colors.white }}>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="for-whom-item flex p-6 md:border-r flex-col gap-5"
              style={{ borderColor: colors.white }}
            >
              <div>
                <div className="flex gap-10 items-center">
                  <Image
                    src="/home/child.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-2xl font-medium mb-4">
                    Yangi boshlayotganlar uchun
                  </h3>
                </div>
              </div>
              <div>
                <p style={{ color: colors.white }}>
                  Dasturlashda boshlang‘ich tushunchaga ega bo‘lganlar bu kurs
                  orqali o‘z bilimlarini mustahkamlab, yangi texnologiyalar
                  bilan ishlashni chuqurroq o‘rganishlari mumkin.
                </p>
              </div>
            </div>

            <div className="for-whom-item p-6 flex flex-col gap-5">
              <div>
                <div className="flex gap-10 items-center">
                  <Image
                    src="/home/people.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-2xl font-medium mb-4">
                    Boshlang‘ich bilimga ega bo‘lganlar uchun
                  </h3>
                </div>
              </div>
              <div>
                <p style={{ color: colors.white }}>
                  Dasturlashda boshlang‘ich tushunchaga ega bo‘lganlar bu kurs
                  orqali o‘z bilimlarini mustahkamlab, yangi texnologiyalar
                  bilan ishlashni chuqurroq o‘rganishlari mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
