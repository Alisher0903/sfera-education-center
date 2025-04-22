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
    title: "O‘qituvchilarimiz katta tajribaga ega",
    description:
      "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
  },
  {
    image: "/home/info1.png",
    title: "Muloqot",
    description:
      "Darslar davomida fikr almashish uchun 15 daqiqalik tanaffus qilishingiz mumkin. Bu bolalarga muloqotini va fikrlashishini o‘stirishga yordam beradi.",
  },
  {
    image: "/home/info2.png",
    title: "Biz sizga ish topishga yordam beramiz",
    description:
      "Markazimizda zamonaviy sohalarda bo‘sh ish o‘rinlarini topishga yordam beruvchi bo‘limi mavjud.",
  },
  {
    image: "/home/info3.png",
    title: "Sertifikatga ega bo‘lishingiz mumkin!",
    description:
      "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Sfera Academiyasi” ning diplom va sertifikatiga ega bo‘ladi.",
  },
];

const Info: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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

      const cards = gsap.utils.toArray<HTMLElement>(".info-card");

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
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-10" ref={sectionRef}>
        <div className="py-10" ref={titleRef}>
          <SectionTitle title="AFZALLIKLARIMZ" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {infoCards.map((card, index) => (
            <div className="info-card" key={index}>
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
