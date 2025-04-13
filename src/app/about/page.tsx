import CourseInfoSection from "@/pages/about/CourseInfo";
import Hero from "@/pages/courses/courses";
import Info from "@/pages/courses/info";
import ForWhomSection from "@/pages/about/forWhom";
import Register from "@/pages/about/info";
import FAQSection from "@/pages/about/accordion";
const About = () => {
    return (
        <div className="">
            <Hero />
            <CourseInfoSection />
            <Info />
            <FAQSection/>
            <Register />
            <ForWhomSection />
        </div >
    );
};

export default About;