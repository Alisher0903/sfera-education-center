"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import colors from "@/lib/colors";
import { Course } from "@/types/cards";

gsap.registerPlugin(ScrollTrigger);

export default function CourseInfoSection({ course }: { course: Course }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".course-info-item");

      items.forEach((item, index) => {
        const elements = item.querySelectorAll(
          "h3, p"
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
              delay: index * 0.3 + i * 0.2,
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
    <div
      style={{ backgroundColor: colors.green, color: colors.white }}
      className="w-full p-6"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: colors.green }}
        >
          <div className="course-info-item px-4 py-2">
            <h3 className="text-lg font-medium">Barcha darslar miqdori:</h3>
            <p className="text-2xl font-bold">{course.lesson_count} dars</p>
          </div>

          <div className="course-info-item px-4 py-2">
            <h3 className="text-lg font-medium">Ta‘lim formati:</h3>
            <p className="text-2xl font-bold">{course.format}</p>
          </div>

          <div className="course-info-item px-4 py-2">
            <h3 className="text-lg font-medium">Kurs davomiyligi:</h3>
            <p className="text-2xl font-bold">{course.course_duration}</p>
          </div>

          <div className="course-info-item px-4 py-2">
            <h3 className="text-lg font-medium">Dars davomiyligi:</h3>
            <p className="text-2xl font-bold">{course.lesson_duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
