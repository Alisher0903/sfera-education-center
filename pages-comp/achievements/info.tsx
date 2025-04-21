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
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info2.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info1.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info3.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info2.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info3.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
  {
    image: "/home/info1.png",
    title: "Biz yuqori ta’lim sifatiga intilamiz",
    description:
      "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
  },
];

const Info = () => {
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

      const cards = gsap.utils.toArray<HTMLElement>(".info-card");

      cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.25,
            });
          },
          onLeave: () => {
            gsap.to(card, {
              opacity: 0,
              y: -50,
              scale: 0.95,
              duration: 0.7,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.25,
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              y: 60,
              scale: 0.95,
              duration: 0.7,
              ease: "power2.in",
            });
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-10">
        <div className="py-10" ref={titleRef}>
          <SectionTitle title="Qadriyatlarimiz" />
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
