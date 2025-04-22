"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VisitsCardProps } from "@/types/cards";
import Image from "next/image";
import colors from "@/lib/colors";
import { URL } from "@/helpers/api";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const VisitsCard: React.FC<VisitsCardProps> = ({
  visitData,
  isLeft = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const elements = [
        imageRef.current,
        nameRef.current,
        dateRef.current,
        descriptionRef.current,
      ].filter(Boolean) as HTMLElement[];

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
              start: "top 100%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: cardRef, dependencies: [] }
  );

  if (!visitData) return null;

  return (
    <div
      className="p-5 rounded-2xl overflow-hidden"
      style={{ border: `2px solid ${colors.green}` }}
      ref={cardRef}
    >
      <div
        className={`grid grid-cols-1 justify-between md:grid-cols-2 h-full ${
          isLeft ? "md:grid-flow-row" : "md:grid-flow-row-dense"
        }`}
      >
        <div className={isLeft ? "" : "md:order-2"}>
          <div className="relative min-w-80 min-h-80 max-w-[100%] overflow-hidden rounded-2xl">
            <Image
              src={`${URL}${visitData.photo}`}
              alt={visitData.full_name}
              fill
              className="object-cover"
              ref={imageRef}
            />
          </div>
        </div>
        <div className={isLeft ? "" : "md:order-1"}>
          <div className="flex flex-col justify-center items-center w-full h-full px-10">
            <h3
              className="mb-2 text-2xl font-bold text-center"
              style={{ color: colors.green }}
              ref={nameRef}
            >
              {visitData.full_name}
            </h3>
            <h3
              className="mb-2 text-sm text-center font-medium tracking-wide"
              style={{ color: colors.grayText }}
              ref={dateRef}
            >
              {visitData.date}
            </h3>
            <p
              className="text-sm md:leading-relaxed text-body-color text-center"
              ref={descriptionRef}
            >
              {visitData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsCard;
