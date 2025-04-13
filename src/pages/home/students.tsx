"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import StudentTestimonialCard from "@/components/cards/student"
import SectionTitle from "@/components/SectionTitle/SectionTitle"

const students = [
    {
        name: "Javohir",
        course: "Frontend Development",
        testimonial: "Ijodkorlik va tafakkur uyg‘unlashgan, web dizayn olamiga katta ishtiyoq bilan kirib kelgan yosh iste’dod egasi. U bir necha oy davomida professional UI/UX dizayn...",
        imageSrc: "/home/team.png"
    },
    {
        name: "Javohir",
        course: "Frontend Development",
        testimonial: "Ijodkorlik va tafakkur uyg‘unlashgan, web dizayn olamiga katta ishtiyoq bilan kirib kelgan yosh iste’dod egasi. U bir necha oy davomida professional UI/UX dizayn...",
        imageSrc: "/home/team.png"
    },
    {
        name: "Javohir",
        course: "Frontend Development",
        testimonial: "Ijodkorlik va tafakkur uyg‘unlashgan, web dizayn olamiga katta ishtiyoq bilan kirib kelgan yosh iste’dod egasi. U bir necha oy davomida professional UI/UX dizayn...",
        imageSrc: "/home/team.png"
    },
    {
        name: "Javohir",
        course: "Frontend Development",
        testimonial: "Ijodkorlik va tafakkur uyg‘unlashgan, web dizayn olamiga katta ishtiyoq bilan kirib kelgan yosh iste’dod egasi. U bir necha oy davomida professional UI/UX dizayn...",
        imageSrc: "/home/team.png"
    }
]

const Students = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="py-10">
                    <SectionTitle title="APLER OYINING ENG YAXSHI O'QUVCHILARI" />
                </div>
                <Swiper
                    className="relative"
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 2 },
                    }}
                >
                    {students.map((student) => (
                        <SwiperSlide key={student.name}>
                            <StudentTestimonialCard
                                name={student.name}
                                course={student.course}
                                testimonial={student.testimonial}
                                imageSrc={student.imageSrc}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
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
    )
}

export default Students
