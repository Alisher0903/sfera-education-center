
import Hero from "@/pages/home/hero";
import Feature from "@/pages/home/feature";
import Team from "@/pages/home/Team";
import Students from "@/pages/home/students";
import About from "@/pages/home/about";
import Info from "@/pages/home/Info";
import Courses from "@/pages/home/courses";

const Home = () => {
    return (
        <>
            <Hero/>
            <Courses/>
            <Feature/>
            <Team/>
            {/* <Students/> */}
            <About/>
            <Info/>
        </>
    );
};

export default Home;