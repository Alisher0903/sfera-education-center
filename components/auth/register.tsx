"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, FileText, X } from "lucide-react";
import colors from "@/lib/colors";
import { registration } from "@/helpers/api";
import { Course } from "@/types/cards";
import CoursesData from "./curs";
import {cn} from "@/lib/utils";
import {raleway} from "@/app/fonts/fonts";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  coursesData?: Course[];
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courses, setData] = useState<any>([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    course_id: null as number | null,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const a = CoursesData();
    a.then((result) => {
      setData(result);
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
      if (event.key === "Enter" && isOpen && !isSubmitting) {
        event.preventDefault();
        if (formRef.current) {
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          );
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    let formatted = "+998";

    if (cleaned.length > 3) {
      formatted += " " + cleaned.slice(3, 5);
    }
    if (cleaned.length > 5) {
      formatted += " " + cleaned.slice(5, 8);
    }
    if (cleaned.length > 8) {
      formatted += " " + cleaned.slice(8, 10);
    }
    if (cleaned.length > 10) {
      formatted += " " + cleaned.slice(10, 12);
    }

    return formatted.trim();
  };

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | number | null
  ) => {
    if (field === "phone_number" && typeof value === "string") {
      const formattedValue = formatPhoneNumber(value);
      setFormData({ ...formData, [field]: formattedValue });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleCourseSelect = (courseId: number | any) => {
    setFormData({ ...formData, course_id: courseId });
    setIsCourseOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        body: JSON.stringify({
          ...formData,
          phone_number: formData.phone_number.replace(/\s/g, ""),
        }),
      });

      if (response.ok) {
        alert("Ro’yxatdan muvaffaqiyatli o’tdingiz!");
        setFormData({
          full_name: "",
          phone_number: "",
          course_id: null,
        });
        onClose();
      } else {
        alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko’ring.");
      }
    } catch {
      alert(
        "Tarmoqqa ulanishda xatolik. Iltimos, keyinroq qayta urinib ko‘ring."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm",
        raleway.className
    )}>
      <div
        ref={modalRef}
        className="rounded-2xl p-8 w-full max-w-xl relative"
        style={{ backgroundColor: colors.green, color: colors.white }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" style={{ color: colors.white }} />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-6 w-6" style={{ color: colors.white }} />
          <h2 className="text-2xl font-medium">Ro‘yxatdan o‘tish</h2>
        </div>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="full_name" className="block text-lg">
              Ism, Familiya:
            </label>
            <input
              id="full_name"
              type="text"
              placeholder="Ismingizni kiriting..."
              className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:outline-none"
              style={{ color: colors.grayText }}
              value={formData.full_name}
              onChange={(e) => handleInputChange("full_name", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone_number" className="block text-lg">
              Telefon raqam:
            </label>
            <div className="relative">
              <input
                id="phone_number"
                type="tel"
                placeholder="+998 XX XXX XX XX"
                className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:outline-none"
                style={{ color: colors.grayText }}
                value={formData.phone_number}
                onChange={(e) =>
                  handleInputChange("phone_number", e.target.value)
                }
                disabled={isSubmitting}
                maxLength={17} // Limit to +998 XX XXX XX XX length
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <button
                  type="button"
                  onClick={() => setIsCountryOpen(!isCountryOpen)}
                  className="flex items-center gap-1 font-medium"
                  style={{ color: colors.green }}
                  disabled={isSubmitting}
                >
                  <span>UZ</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="course_id" className="block text-lg">
              Kurs tanlash:
            </label>
            <div className="relative">
              <button
                id="course_id"
                type="button"
                className="w-full px-4 bg-gray-100 py-4 rounded-lg flex justify-between items-center focus:outline-none text-left cursor-pointer"
                style={{ color: colors.grayText }}
                onClick={() => setIsCourseOpen(!isCourseOpen)}
                disabled={isSubmitting}
              >
                <span>
                  {formData.course_id && courses
                    ? courses.find((i: any) => i.id === formData.course_id)
                        ?.name
                    : "Kursni tanlang"}
                </span>
                <ChevronDown className="" style={{ color: colors.green }} />
              </button>

              {isCourseOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-md shadow-lg z-10 bg-gray-100">
                  <div className="py-1">
                    {courses?.length ? (
                      courses.map((i: any) => (
                        <button
                          key={i.id}
                          type="button"
                          style={{ color: colors.grayText }}
                          className="w-full px-4 py-2 text-left hover:opacity-80 cursor-pointer"
                          onClick={() => handleCourseSelect(i.id)}
                        >
                          {i.name}
                        </button>
                      ))
                    ) : (
                      <div
                        className="px-4 py-2"
                        style={{ color: colors.grayText }}
                      >
                        Kurslar mavjud emas
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl text-lg font-medium transition duration-300 cursor-pointer"
            style={{
              color: colors.white,
              border: `2px solid ${colors.white}`,
              backgroundColor: colors.green,
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
          </button>
        </form>
      </div>
    </div>
  );
}
