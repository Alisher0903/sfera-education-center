"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "@/components/accordion/accordion";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = [titleRef.current, sectionRef.current].filter(
        Boolean
      ) as HTMLElement[];

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
    <div className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-10" ref={titleRef}>
        <SectionTitle title="ENG KOP BERILADIGAN SAVOLLAR" />
      </div>
      <div className="container mx-auto flex flex-col gap-3">
        <div className="faq-item">
          <Accordion
            title="Nima uchun Sfera’ni tanlash kerak?"
            defaultOpen={false}
          >
            <p className="accordion-content text-xl">
              Sfera Academy – bu zamonaviy yondashuv, tajribali ustozlar va real
              loyihalar asosida o‘qitiladigan amaliy kurslar. Har bir o‘quvchiga
              individual e’tibor, doimiy qo‘llab-quvvatlash va kuchli portfolio
              yaratish imkoniyati beriladi.
            </p>
          </Accordion>
        </div>
        <div className="faq-item">
          <Accordion title="Kurslar qanday davom etadi?" defaultOpen={false}>
            <p className="accordion-content text-xl">
              Kurslar haftasiga bir necha marta bo‘lib o‘tadi va darslar nazariy
              hamda amaliy shaklda o‘tiladi. Har bir modul oxirida loyihalar
              topshiriladi.
            </p>
          </Accordion>
        </div>
        <div className="faq-item">
          <Accordion
            title="Diplom yoki sertifikat beriladimi?"
            defaultOpen={false}
          >
            <p className="accordion-content text-xl">
              Ha, kursni muvaffaqiyatli tugatgan har bir ishtirokchiga Sfera
              Academy tomonidan sertifikat taqdim etiladi.
            </p>
          </Accordion>
        </div>
        <div className="faq-item">
          <Accordion
            title="Online o‘qish imkoniyati bormi?"
            defaultOpen={false}
          >
            <p className="accordion-content text-xl">
              Albatta! Bizda to‘liq online formatda ham o‘qish imkoniyati
              mavjud. Darslar Zoom orqali olib boriladi va yozuvlar saqlanadi.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
