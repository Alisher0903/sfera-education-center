import Hero from "@/pages/home/hero";
import Feature from "@/pages/home/feature";
import Team from "@/pages/home/Team";
import Students from "@/pages/home/students";
import About from "@/pages/home/about";
import Info from "@/pages/home/Info";
import {bestStudents, ReadCourses, Teachers} from "@/helpers/api";
import Courses from "@/pages/home/courses";
import type {Metadata} from "next";
import {defaultMetadata} from "@/lib/seo";

async function getAllData(url: string) {
    const res = await fetch(url, {
        cache: 'no-store',
    });
    return res.json();
}

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
            <Students studentsData={studentsData}/>
            <About/>
            <Info/>
        </>
    );
};

export default Home;