import { ReadCourses } from "@/helpers/api";
import Hero from "@/pages/about/hero";
import CourseInfoSection from "@/pages/about/CourseInfo";
import Info from "@/pages/courses/info";
import ForWhomSection from "@/pages/about/forWhom";
import Register from "@/pages/about/info";
import FAQSection from "@/pages/about/accordion";
import Teachers from "@/pages/about/teachers";
import { CoursePageProps } from "@/types/cards";


export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = params;
    const res = await fetch(`${ReadCourses}/${id}`, {
        cache: 'no-store',
    });
    const courseData = await res.json();

    return (
        <div className="">
            <Hero course={courseData} />
            <CourseInfoSection course={courseData} />
            <Info />
            {/* <Teachers course={courseData}/> */}
            <FAQSection />
            <Register />
            <ForWhomSection />
        </div>
    );
}
