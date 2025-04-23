import { ReadCourses } from "@/helpers/api";
import { getAllData } from "@/helpers/request";
import { Course } from "@/types/cards";

const CoursesData = async () => {
        const allCourses = await getAllData<Course[]>(ReadCourses);
    return allCourses
};

export default CoursesData;