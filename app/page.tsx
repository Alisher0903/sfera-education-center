import Hero from "@/pages-comp/home/hero";
import Feature from "@/pages-comp/home/feature";
import Team from "@/pages-comp/home/Team";
import Students from "@/pages-comp/home/students";
import About from "@/pages-comp/home/about";
import Info from "@/pages-comp/home/Info";
import {bestStudents, ReadCourses, Teachers} from "@/helpers/api";
import Courses from "@/pages-comp/home/courses";
import type {Metadata} from "next";
import {defaultMetadata} from "@/lib/seo";
import {getAllData} from "@/helpers/request";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Sfera Academy | Zamonaviy kasblar akademiyasi",
};

const Home = async () => {
    const courseData = await getAllData(ReadCourses);
    const teacherData = await getAllData(Teachers);
    const studentsData = await getAllData(bestStudents);
    return (
        <>
            <Hero/>
            <Courses courseData={courseData}/>
            <Feature/>
            <Team teacherData={teacherData}/>
            <Students studentsData={[...studentsData, ...studentsData, ...studentsData]}/>
            <About/>
            <Info/>
        </>
    );
};

export default Home;