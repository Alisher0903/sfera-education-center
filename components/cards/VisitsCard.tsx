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
    },
    { scope: cardRef }
  );

  if (!visitData) return null;

  return (
    <div
      className="p-5 rounded-2xl"
      style={{ border: `2px solid ${colors.green}` }}
      ref={cardRef}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${
          isLeft ? "lg:grid-flow-row" : "lg:grid-flow-row-dense"
        }`}
      >
        <div className={isLeft ? "" : "lg:order-2"}>
          <div className="relative ">
            <Image
              src={`${URL}${visitData.photo}`}
              alt={visitData.full_name}
              width={1000}
              height={1000}
              className="object-cover rounded-2xl"
              // ref={imageRef}
            />
          </div>
        </div>
        <div className={isLeft ? "" : "lg:order-1"}>
          <div className="flex flex-col justify-center items-center w-full h-full p-4">
            <h3
              className="mb-5 text-3xl"
              style={{ color: colors.green }}
              ref={nameRef}
            >
              {visitData.full_name}
            </h3>
            <h3
              className="mb-5 text-xl font-medium tracking-wide"
              style={{ color: colors.grayText }}
              ref={dateRef}
            >
              {visitData.date}
            </h3>
            <p
              className="text-base font-medium md:leading-relaxed text-body-color text-center"
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
