"use client"

import { ChevronDown, FileText } from "lucide-react"
import { useState } from "react"
import colors from "@/lib/colors"

export function RegistrationForm() {
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isCourseOpen, setIsCourseOpen] = useState(false)

  return (
    <div
      className="rounded-2xl p-8 w-full mx-auto"
      style={{ backgroundColor: colors.green, color: colors.white }}
    >
      <div className="flex items-center gap-3 mb-8">
        <FileText className="h-6 w-6" style={{ color: colors.white }} />
        <h2 className="text-2xl font-medium">Ro'yxatdan o'tish</h2>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg">
            Ism, Familiya:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ismingizni kiriting..."
            className="w-full px-4 py-4 rounded-lg focus:outline-none"
            style={{
              backgroundColor: colors.white,
              color: colors.grayText,
            }}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-lg">
            Telefon raqam:
          </label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              placeholder="+998 000 00 00"
              className="w-full px-4 py-4 rounded-lg focus:outline-none"
              style={{
                backgroundColor: colors.white,
                color: colors.grayText,
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button
                type="button"
                className="flex items-center gap-1 font-medium"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                style={{ color: colors.green }}
              >
                <span>UZ</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="course" className="block text-lg">
            Kurs tanlash:
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full px-4 py-4 rounded-lg flex justify-between items-center focus:outline-none text-left"
              onClick={() => setIsCourseOpen(!isCourseOpen)}
              style={{
                backgroundColor: colors.white,
                color: colors.grayText,
              }}
            >
              <span>Kursni tanlang</span>
              <ChevronDown className="h-5 w-5" style={{ color: colors.green }} />
            </button>

            {isCourseOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-1 rounded-md shadow-lg z-10"
                style={{ backgroundColor: colors.white }}
              >
                <div className="py-1">
                  {["Boshlang'ich", "O'rta", "Yuqori"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      className="w-full px-4 py-2 text-left hover:opacity-80"
                      style={{ color: colors.grayText }}
                      onClick={() => setIsCourseOpen(false)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
