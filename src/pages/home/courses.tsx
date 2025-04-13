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
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, "
    },
    {
        id: 2,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, "
    },
    {
        id: 3,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/courses/front-end",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, "
    },
    {
        id: 4,
        title: "Front-End",
        description:
            "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, dizayn va o'zaro ta'sir qilish uchun HTML, CSS va JavaScript-dan foydalanish bilan bog'liq.",
        imageUrl: "/home/1.png",
        detailsUrl: "/home/course.png",
        text: "Veb-saytlar va ilovalarning foydalanuvchiga qaragan qismi, "
    },

]

const Courses = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10">
                    <SectionTitle title="KURSLARIMIZ" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                            imageUrl={course.imageUrl}
                            detailsUrl={course.detailsUrl}
                            text={course.text}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Courses