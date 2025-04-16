

import { ReadCourses } from "@/helpers/api";
import Hero from "@/pages/about/hero";
import CourseInfoSection from "@/pages/about/CourseInfo";
import Info from "@/pages/courses/info";
import ForWhomSection from "@/pages/about/forWhom";
import Register from "@/pages/about/info";
import FAQSection from "@/pages/about/accordion";
import Teachers from "@/pages/about/teachers";


async function getPosts() {
    const res = await fetch(`${ReadCourses}/4`, {
        cache: 'no-store',
    });

    return res.json();
}
const About = async() => {
    const courseData = await getPosts();
    console.log(courseData);
    

    return (
        <div className="">
            <Hero course={courseData} />
            <CourseInfoSection course={courseData}/>
            <Info />
            {/* <Teachers course={courseData}/> */}
            <FAQSection/>
            <Register />
            <ForWhomSection />
        </div >
    );
};

export default About;