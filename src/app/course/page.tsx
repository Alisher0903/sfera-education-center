"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ReadCourses } from "@/helpers/api";
import Hero from "@/pages/about/hero";
import CourseInfoSection from "@/pages/about/CourseInfo";
import Info from "@/pages/courses/info";
import ForWhomSection from "@/pages/about/forWhom";
import Register from "@/pages/about/info";
import FAQSection from "@/pages/about/accordion";
import Teachers from "@/pages/about/teachers";
const About = () => {
    const searchParams = useSearchParams();
    const id = searchParams!.get("id");
  
    const [course, setCourse] = useState<any>(null);
    console.log(course);
    
  
    useEffect(() => {
      fetch(`${ReadCourses}/${id}`)
        .then((res) => res.json())
        .then((data) => setCourse(data));
    }, [id]);
  
    if (!course) return <div>Yuklanmoqda...</div>;
    
    return (
        <div className="">
            <Hero course={course} />
            <CourseInfoSection course={course}/>
            <Info />
            <Teachers course={course}/>
            <FAQSection/>
            <Register />
            <ForWhomSection />
        </div >
    );
};

export default About;