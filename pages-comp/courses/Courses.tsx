"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackendCard from "@/components/cards/courses";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";

gsap.registerPlugin(ScrollTrigger);

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Sfera Academy | Kurslar",
};

const Courses = ({ Courses }: any) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      gsap.set(titleRef.current, { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 100%",
        end: "top 0%",
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

      const cards = gsap.utils.toArray<HTMLElement>(".course-card-item");

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
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-20">
        <div className="py-10" ref={titleRef}>
          <SectionTitle title="KURSLARIMIZ" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Courses.map((course: any) => (
            <div className="course-card-item" key={course.id}>
              <BackendCard
                courseTitle={course.course.name}
                start_date={course.start_date}
                duration={course.course.course_duration}
                price={course.price}
                instructorName={course.teacher.name}
                instructorImage={course.teacher.photo}
                photo={course.teacher.photo}
                image={course.course.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
