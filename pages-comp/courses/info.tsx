"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfoCard from "@/components/cards/infoCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export const infoCards = [
  {
    image: "/home/info.png",
    title: "",
    description:
      "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info2.png",
    title: "",
    description:
      "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. ",
  },
  {
    image: "/home/info3.png",
    title: "",
    description:
      "Frontend dasturchilar foydalanuvchi interfeysini ishlab chiqadilar va dizaynni interaktiv elementlarga aylantiradilar. Ular ",
  },
  {
    image: "/home/info1.png",
    title: "",
    description:
      "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. ",
  },
];

const Info: React.FC = () => {
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

      const cards = gsap.utils.toArray<HTMLElement>(".info-card-item");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.25,
            scrollTrigger: {
              trigger: card,
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
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-10">
        <div className="py-10" ref={titleRef}>
          <SectionTitle title="KURS HAQIDA BATAFSIL" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {infoCards.map((card, index) => (
            <div className="info-card-item " key={index}>
              <InfoCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
