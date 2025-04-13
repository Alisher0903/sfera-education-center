"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import colors from "@/lib/colors"

export default function OurMotto() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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
    ]

    if (!mounted) return null

    return (
        <section className="w-full  flex flex-col items-center justify-center">
            <div className="container flex flex-col items-center">
                <div className="rounded-lg md:p-12 text-center text-white w-full" style={{backgroundColor: colors.green, color:colors.white}}>
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
                        className="mySwiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="py-4">
                                    <h2 className="text-3xl md:text-3xl font-semibold mb-6">{slide.title}</h2>
                                    <p className="text-xl mx-auto">{slide.content}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

               
                <div className="custom-pagination flex justify-center mt-6"></div>
            </div>
        </section>
    )
}
