"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { URL } from "@/helpers/api";
import colors from "@/lib/colors";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Values({ achievementData }: any) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      gsap.set(titleRef.current, { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 90%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeave: () => {
          gsap.to(titleRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.7,
            ease: "power2.in",
          });
        },
        onEnterBack: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.7,
            ease: "power2.in",
          });
        },
      });

      const achievements = gsap.utils.toArray<HTMLElement>(".achievement-item");

      achievements.forEach((achievement) => {
        const title = achievement.querySelector("h2") as HTMLElement;
        const description = achievement.querySelector("p") as HTMLElement;
        // const image = achievement.querySelector("img") as HTMLElement;

        const elements = [title, description].filter(Boolean) as HTMLElement[];

        elements.forEach((element, index) => {
          gsap.set(element, { opacity: 0, y: 50 });

          ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: index * 0.3,
              });
            },
            onLeave: () => {
              gsap.to(element, {
                opacity: 0,
                y: -50,
                duration: 0.7,
                ease: "power2.in",
              });
            },
            onEnterBack: () => {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: index * 0.3,
              });
            },
            onLeaveBack: () => {
              gsap.to(element, {
                opacity: 0,
                y: 50,
                duration: 0.7,
                ease: "power2.in",
              });
            },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-20">
        <div className="my-10" ref={titleRef}>
          <SectionTitle title="YUTUQLARIMIZ" />
        </div>
        {achievementData.map((achievement: any, index: number) => (
          <div key={achievement.id} className="achievement-item ">
            <div>
              <div
                className={`flex flex-col lg:flex-row justify-center items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/2 py-10 order-1 lg:order-none">
                  <h2
                    className="text-3xl font-bold mb-4 text-center"
                    style={{ color: colors.green }}
                  >
                    {achievement.title}
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-center px-4 sm:px-20">
                    {achievement.description}
                  </p>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 order-2">
                  <div className="overflow-hidden">
                    <Image
                      src={`${URL}/static/medias/a9e45423-7385-4495-878b-3c989d8cfe96.png`}
                      alt={achievement.title}
                      width={1000}
                      height={1000}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
