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
        testimonial: "Ijodkorlik va tafakkur uyg‘unlashgan, web dizayn olamiga katta ishtiyoq bilan kirib kelgan yosh iste’dod egasi. U bir necha oy davomida professional UI/UX dizayn... ",
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
                <div className="flex flex-col md:flex-row gap-5 justify-center">
                    {students.map((student) => (
                        <StudentTestimonialCard
                            key={student.name}
                            name={student.name}
                            course={student.course}
                            testimonial={student.testimonial}
                            imageSrc={student.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>


    )
}

export default Students