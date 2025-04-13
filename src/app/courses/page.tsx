import BackendCard from "@/components/cards/courses";
import SectionTitle from "@/components/SectionTitle/SectionTitle";


const courses = [
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
    {
        courseTitle: "Node.js Backend",
        startDate: "20.04.2025",
        duration: "5 oy",
        price: "700 000 so'm",
        instructorName: "Javohir Qo'ziboyev",
        instructorImage: "/home/team.png",
        image:"/home/course.png"
    },
]

const Courses = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-20 ">
                <div className="py-10"><SectionTitle title="KURSLARIMIZ" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                        <BackendCard key={index} {...course} />
                    ))}
                </div>
            </div>
            {/* <Hero />
            <Info /> */}
        </section>
    );
};

export default Courses;