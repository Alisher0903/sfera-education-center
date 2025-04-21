import Info from "@/pages-comp/courses/info";
import ForWhomSection from "@/pages-comp/about/forWhom";
import FAQSection from "@/pages-comp/about/accordion";
import {getAllData} from "@/helpers/request";
import {ReadCourses} from "@/helpers/api";
import Hero from "@/pages-comp/about/hero";
import CourseInfoSection from "@/pages-comp/about/CourseInfo";
import Register from "@/pages-comp/about/info";
import Teacher from "@/pages-comp/about/teachers";
import {Course} from "@/types/cards";

export default async function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    const courseDataList: Course[] = await getAllData(ReadCourses);
    const courseData: Course = await getAllData(`${ReadCourses}/${id}`);

    return (
        <div>
            <Hero course={courseData}/>
            <CourseInfoSection course={courseData}/>
            <Info/>
            <Teacher course={courseData}/>
            <FAQSection/>
            <Register coursesData={courseDataList}/>
            <ForWhomSection/>
        </div>
    );
}
