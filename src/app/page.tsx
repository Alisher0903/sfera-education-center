import Hero from "@/pages/home/hero";
import Feature from "@/pages/home/feature";
import Team from "@/pages/home/Team";
import Students from "@/pages/home/students";
import About from "@/pages/home/about";
import Info from "@/pages/home/Info";
import { bestStudents, ReadCourses, Teachers } from "@/helpers/api";
import Courses from "@/pages/home/courses";

async function getPosts() {
    const res = await fetch(ReadCourses, {
        cache: 'no-store',
    });

    return res.json();
}

async function getTeachers() {
    const res = await fetch(`${Teachers}`, {
        cache: 'no-store',
    });
    return res.json();

}

async function getStudents() {
    const res = await fetch(`${bestStudents}`, {
        cache: 'no-store',
    });
    return res.json();

}
const Home = async () => {
    const courseData = await getPosts();
    const teacherData = await getTeachers()
    const studentsData =await getStudents()
    console.log(studentsData);
    

    return (
        <>
            <Hero />
            <Courses courseData={courseData} />
            <Feature />
            <Team  teacherData = {teacherData}/>
            <Students studentsData ={studentsData}  />
            <About />
            <Info />
        </>
    );
};

export default Home;