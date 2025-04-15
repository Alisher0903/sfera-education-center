import Hero from "@/pages/home/hero";
import Feature from "@/pages/home/feature";
import Team from "@/pages/home/Team";
import Students from "@/pages/home/students";
import About from "@/pages/home/about";
import Info from "@/pages/home/Info";
import {ReadCourses} from "@/helpers/api";
import Courses from "@/pages/home/courses";

async function getPosts() {
    const res = await fetch(ReadCourses, {
        cache: 'no-store',
    });

    return res.json();
}

const Home = async () => {
    const courseData = await getPosts();

    return (
        <>
            <Hero/>
            <Courses courseData={courseData}/>
            <Feature/>
            <Team/>
            <Students/>
            <About/>
            <Info/>
        </>
    );
};

export default Home;