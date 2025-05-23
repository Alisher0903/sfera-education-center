"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import colors from "@/lib/colors";
import { ChevronDown, FileText, Info } from "lucide-react";
import { registration } from "@/helpers/api";
import { Course } from "@/types/cards";

gsap.registerPlugin(ScrollTrigger);

interface RegisterProps {
  coursesData?: Course[];
}

const Register = ({ coursesData }: RegisterProps) => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    course_id: null as number | null,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const educationInfoRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string | number | null) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCourseSelect = (courseId: number) => {
    setFormData({ ...formData, course_id: courseId });
    setIsCourseOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.full_name || !formData.phone_number || !formData.course_id) {
      alert("Iltimos, barcha maydonlarni to’ldiring");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(registration, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Ro’yxatdan muvaffaqiyatli o’tdingiz!");
        setFormData({
          full_name: "",
          phone_number: "",
          course_id: null,
        });
      } else alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko’ring.");
    } catch {
      alert(
        "Tarmoqqa ulanishda xatolik. Iltimos, keyinroq qayta urinib ko‘ring."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

      if (educationInfoRef.current) {
        const educationElements = educationInfoRef.current.querySelectorAll(
          "h2, ul"
        ) as NodeListOf<HTMLElement>;

        educationElements.forEach((element, index) => {
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
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-10"
      ref={sectionRef}
    >
      <div className="py-6 sm:py-10" ref={titleRef}>
        <SectionTitle title="RO’YHATDAN O’TISH" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="bg-gray-100 rounded-2xl p-8 w-full mx-auto"
          ref={educationInfoRef}
        >
          <div className="flex items-center gap-3 mb-8">
            <Info className="h-5 w-5" />
            <h2 className="text-2xl font-medium">Ta’lim haqida</h2>
          </div>
          <ul className="space-y-5 text-xl" style={{ color: colors.grayText }}>
            {[
              "Ta’lim guruhda olib boriladi.",
              "Har bir guruh 15 kishidan iborat.",
              "Bir oyda 8 ta mashg’ulot bo’ladi.",
              "Har bir dars — 90 daqiqa davom etadi.",
              "Kurs jami — 80 ta darsdan iborat.",
              "Haftasiga 2 ta dars o‘tiladi.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-5">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl p-8 w-full mx-auto"
          style={{ backgroundColor: colors.green, color: colors.white }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl font-medium">Ro’yxatdan o’tish</h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-lg">Ism, Familiya:</label>
              <input
                type="text"
                placeholder="Ismingizni kiriting..."
                className="w-full px-4 py-4 bg-gray-100 rounded-lg  focus:outline-none"
                style={{
                  color: colors.grayText,
                }}
                value={formData.full_name}
                onChange={(e) => handleInputChange("full_name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg">Telefon raqam:</label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+998 00 000 00 00"
                  className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:outline-none"
                  style={{
                    
                    color: colors.grayText,
                  }}
                  value={formData.phone_number}
                  onChange={(e) =>
                    handleInputChange("phone_number", e.target.value)
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="flex items-center gap-1 font-medium"
                    style={{ color: colors.green }}
                  >
                    <span>UZ</span>
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-lg">Kurs tanlash:</label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full px-4 bg-gray-100 py-4 rounded-lg flex justify-between items-center focus:outline-none text-left cursor-pointer"
                  style={{
                    color: colors.grayText,
                  }}
                  onClick={() => setIsCourseOpen(!isCourseOpen)}
                >
                  <span>
                    {formData.course_id
                      ? coursesData?.find(
                          (course) => course.id === formData.course_id
                        )?.name
                      : "Kursni tanlang"}
                  </span>
                  <ChevronDown
                    className="h-5 w-5"
                    style={{ color: colors.green }}
                  />
                </button>

                {isCourseOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 rounded-md shadow-lg z-10 bg-gray-100">
                    <div className="py-1">
                      {coursesData?.map((course) => (
                        <button
                          key={course.id}
                          type="button"
                          className="w-full px-4 py-2 text-left hover:opacity-80 cursor-pointer"
                          style={{ color: colors.grayText }}
                          onClick={() => handleCourseSelect(course?.id || 0)}
                        >
                          {course.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="py-3 px-8 w-full md:w-[50%] rounded-xl text-base sm:text-lg font-medium transition duration-300 cursor-pointer"
          style={{
            color: colors.white,
            border: `2px solid ${colors.green}`,
            backgroundColor: colors.green,
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
        </button>
      </div>
    </section>
  );
};

export default Register;
