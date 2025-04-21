import Info from "@/pages-comp/courses/info";
import ForWhomSection from "@/pages-comp/about/forWhom";
import FAQSection from "@/pages-comp/about/accordion";
import {getAllData} from "@/helpers/request";
import {ReadCourses} from "@/helpers/api";
import Hero from "@/pages-comp/about/hero";
import CourseInfoSection from "@/pages-comp/about/CourseInfo";
import Register from "@/pages-comp/about/info";
import Teacher from "@/pages-comp/about/teachers";

interface Props {
    params: { id: string };
}

export default async function CoursePage({params}: Props) {
    const {id} = params;
    const courseData = await getAllData(`${ReadCourses}/${id}`);

    return (
        <div>
            <Hero course={courseData}/>
            <CourseInfoSection course={courseData}/>
            <Info/>
            <Teacher course={courseData}/>
            <FAQSection/>
            <Register coursesData={courseData}/>
            <ForWhomSection/>
        </div>
    );
}
