// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import TeamMemberCard from "@/components/cards/TeamMember";
// import SectionTitle from "@/components/SectionTitle/SectionTitle";
// import { teacher, TeamMemberCardProps } from "@/types/cards";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.3,
//       when: "beforeChildren",
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 60, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 15,
//       duration: 0.6,
//     },
//   },
// };

// const Team = ({ teacherData }: teacher) => {
//   return (
//     <motion.section
//       className="w-full px-4 sm:px-6 lg:px-8"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <div className="max-w-7xl mx-auto py-10">
//         <div className="mb-10">
//           <motion.div variants={itemVariants}>
//             <SectionTitle title="BIZNING JAMOA" />
//           </motion.div>
//         </div>

//         <Swiper
//           className="relative"
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           navigation
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//         >
//           {teacherData.map((member: TeamMemberCardProps) => (
//             <SwiperSlide key={member.id}>
//               <motion.div variants={itemVariants}>
//                 <TeamMemberCard
//                   name={member.name}
//                   level={member.level}
//                   photo={member.photo}
//                   // socialLinks={member.socialLinks}
//                 />
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <style jsx global>{`
//           .swiper-button-next,
//           .swiper-button-prev {
//             color: white;
//             background-color: #1ca855;
//             padding: 10px;
//             border-radius: 9999px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//             width: 40px;
//             height: 40px;
//           }

//           .swiper-button-next::after,
//           .swiper-button-prev::after {
//             font-size: 16px;
//           }
//         `}</style>
//       </div>
//     </motion.section>
//   );
// };

// export default Team;

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamMemberCard from "@/components/cards/TeamMember";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { teacher, TeamMemberCardProps } from "@/types/cards";

gsap.registerPlugin(ScrollTrigger);

const Team: React.FC<teacher> = ({ teacherData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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

      const cards = gsap.utils.toArray<HTMLElement>(".team-member-card");
      const nextButton = document.querySelector(
        ".swiper-button-next"
      ) as HTMLElement;
      const prevButton = document.querySelector(
        ".swiper-button-prev"
      ) as HTMLElement;
      const navButtons = [nextButton, prevButton].filter(Boolean);

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
              onComplete: () => {
                navButtons.forEach((button) => {
                  gsap.to(button, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                });
              },
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
            navButtons.forEach((button) => {
              gsap.to(button, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                ease: "power2.in",
              });
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
              onComplete: () => {
                navButtons.forEach((button) => {
                  gsap.to(button, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                });
              },
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
            navButtons.forEach((button) => {
              gsap.to(button, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                ease: "power2.in",
              });
            });
          },
        });
      });

      navButtons.forEach((button) => {
        gsap.set(button, { opacity: 0, scale: 0.8 });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-10">
        <div className="mb-10" ref={titleRef}>
          <SectionTitle title="BIZNING JAMOA" />
        </div>

        <div ref={swiperRef}>
          <Swiper
            className="relative"
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            navigation
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {teacherData.map((member: TeamMemberCardProps) => (
              <SwiperSlide key={member.id}>
                <div className="team-member-card w-full">
                  <TeamMemberCard
                    name={member.name}
                    level={member.level}
                    photo={member.photo}
                    // socialLinks={member.socialLinks}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background-color: #1ca855;
            padding: 10px;
            border-radius: 9999px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 40px;
            height: 40px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Team;
