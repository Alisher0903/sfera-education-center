import {NewCourses} from "@/helpers/api";
import type {Metadata} from "next";
import {defaultMetadata} from "@/lib/seo";
import {getAllData} from "@/helpers/request";
import Courses from "@/pages-comp/courses/Courses";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Sfera Academy | Kurslar",
};

const CoursesPage = async () => {
    const newStudentData = await getAllData(NewCourses);

    return <Courses Courses={newStudentData}/>;
};

export default CoursesPage;
