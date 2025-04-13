"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import CourseCard from "@/components/cards/courseCard"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { CourseCardProps } from "@/types/cards"

const courses: CourseCardProps[] = [
    {
        id: 1,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
    {
        id: 2,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
    {
        id: 3,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/courses/front-end",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
    {
        id: 4,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
    {
        id: 5,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
    {
        id: 6,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, ",
    },
]

const Courses = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10">
                    <SectionTitle title="KURSLARIMIZ" />
                </div>

                <Swiper
                    className="relative"
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id} className="">
                            <CourseCard {...course} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx global>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: white; /* tugma rangi */
    background-color: #1CA855; /* Tailwinddagi bg-blue-500 */
    padding: 10px;
    border-radius: 9999px; /* rounded-full */
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
    )
}

export default Courses
