"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import TeamMemberCard from "@/components/cards/TeamMember"
import SectionTitle from "@/components/SectionTitle/SectionTitle"

const Teams = [
    {
        name: "John Doe",
        position: "Frontend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/johndoe",
            facebook: "https://www.facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            telegram: "https://t.me/johndoe",
        },
    },
    {
        name: "Jane Doe",
        position: "Backend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/janedoe",
            facebook: "https://www.facebook.com/janedoe",
            twitter: "https://twitter.com/janedoe",
            telegram: "https://t.me/janedoe",
        },
    },
    {
        name: "Alice Smith",
        position: "UI/UX Designer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/alicesmith",
            facebook: "https://www.facebook.com/alicesmith",
            twitter: "https://twitter.com/alicesmith",
            telegram: "https://t.me/alicesmith",
        },
    },
    {
        name: "Bob Johnson",
        position: "Fullstack Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/bobjohnson",
            facebook: "https://www.facebook.com/bobjohnson",
            twitter: "https://twitter.com/bobjohnson",
            telegram: "https://t.me/bobjohnson",
        },
    },
    {
        name: "Bob Johnson",
        position: "Fullstack Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/bobjohnson",
            facebook: "https://www.facebook.com/bobjohnson",
            twitter: "https://twitter.com/bobjohnson",
            telegram: "https://t.me/bobjohnson",
        },
    },
    {
        name: "Bob Johnson",
        position: "Fullstack Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/bobjohnson",
            facebook: "https://www.facebook.com/bobjohnson",
            twitter: "https://twitter.com/bobjohnson",
            telegram: "https://t.me/bobjohnson",
        },
    }
]

const Team = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10">
                    <SectionTitle title="BIZNING JAMOA" />
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
                    {Teams.map((member) => (
                        <SwiperSlide key={member.name}>
                            <TeamMemberCard
                                name={member.name}
                                position={member.position}
                                imageSrc={member.imageSrc}
                                socialLinks={member.socialLinks}
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

export default Team
