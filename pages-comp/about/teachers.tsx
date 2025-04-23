"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import colors from "@/lib/colors";
import { URL } from "@/helpers/api";

gsap.registerPlugin(ScrollTrigger);

export default function Teacher({ course }: { course: any }) {
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
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".teacher-card-item");

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
    <section className="py-10" style={{ color: colors.green }} ref={sectionRef}>
      <div className="mb-10" ref={titleRef}>
        <SectionTitle title="FRONTEND O'QITUVCHILARI" />
      </div>

      <div className="relative">
        <div className="absolute inset-0 h-[250px] bg-green-500 -z-10" />

        <div className="overflow-x-auto scrollbar-none">
          <div className="flex w-max gap-20 px-10">
            {course?.teachers?.map((member: any) => (
              <div
                key={member.id}
                className="teacher-card-item flex flex-col items-center min-w-[200px] rounded-md"
              >
                <div className="w-full h-[250px] relative flex justify-center">
                  <div className="absolute bottom-0 w-[200px] h-[200px]">
                    <Image
                      src={`${URL}${member.photo}`}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <div className="mt-2 text-center">
                  <h3 className="text-black text-lg font-medium">
                    {member.name}
                  </h3>
                  <p
                    className="text-sm "
                    style={{ color: colors.grayText }}
                  >
                    {member.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
