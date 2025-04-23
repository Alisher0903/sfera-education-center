"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import colors from "@/lib/colors";

gsap.registerPlugin(ScrollTrigger);

export default function OurMotto() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      title: "Shiorimiz",
      content:
        "Bilimga to'ldirish! Ha biz ta'lim beramiz, bilimga to'ldiramiz, To'ldirish bizning shiorimiz - emotsiyaga, yangi g'oyalarga, motivatsiyaga va bilimga to'ldirish. Donishmandlar aytganidek insonga pul yetmay qolishi mumkin emas, unga faqat bilim yetmay qoladi.",
    },
    {
      title: "Maqsadimiz",
      content:
        "Har bir o'quvchiga sifatli ta'lim berish va ularning bilim darajasini oshirish. Biz o'quvchilarimizga nafaqat bilim, balki hayotda muvaffaqiyatga erishish uchun zarur bo'lgan ko'nikmalarni ham o'rgatamiz.",
    },
    {
      title: "Qadriyatlarimiz",
      content:
        "Bilimga to‘ldirish! Ha biz ta’lim beramiz, bilimga to‘ldiramiz. To‘ldirish bizning shiorimiz - emotsiyaga, yangi g‘oyalarga, motivatsiyaga va bilimga to‘ldirish. Donishmandlar aytganidek insonga pul yetmay qolishi mumkin emas, unga faqat bilim yetmay qoladi.",
    },
  ];

  useGSAP(
    () => {
      const slides = gsap.utils.toArray<HTMLElement>(".swiper-slide");
      const pagination = document.querySelector(
        ".custom-pagination"
      ) as HTMLElement;

      slides.forEach((slide) => {
        const title = slide.querySelector("h2") as HTMLElement;
        const content = slide.querySelector("p") as HTMLElement;

        gsap.fromTo(
          [title, content],
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: slide,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        if (pagination) {
          gsap.fromTo(
            pagination,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 0.6,
              scrollTrigger: {
                trigger: slide,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  if (!mounted) return null;

  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      ref={sectionRef}
    >
      <div className="container flex flex-col items-center px-2 sm:px-6 lg:px-8 " ref={containerRef}>
        <div
          className="rounded-lg md:p-12 text-center w-full "
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet !bg-white !opacity-60 ",
              bulletActiveClass: "!opacity-100",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 ">
                  <h2 className="text-3xl md:text-3xl font-semibold mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl mx-auto">{slide.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </section>
  );
}
