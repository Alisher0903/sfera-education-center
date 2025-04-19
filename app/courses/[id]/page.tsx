import Info from "@/pages-comp/courses/info";
import ForWhomSection from "@/pages-comp/about/forWhom";
import FAQSection from "@/pages-comp/about/accordion";

export default async function CoursePage() {
    return (
        <div>
            {/*<Hero course={courseData} />*/}
            {/*<CourseInfoSection course={courseData} />*/}
            <Info/>
            {/*<Teachers course={courseData} />*/}
            <FAQSection/>
            {/*<Register coursesData={coursesData}/>*/}
            <ForWhomSection/>
        </div>
    );
}
