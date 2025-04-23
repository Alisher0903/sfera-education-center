import Info from "@/pages-comp/courses/info";
import ForWhomSection from "@/pages-comp/about/forWhom";
import FAQSection from "@/pages-comp/about/accordion";
import { getAllData } from "@/helpers/request";
import { ReadCourses } from "@/helpers/api";
import Hero from "@/pages-comp/about/hero";
import CourseInfoSection from "@/pages-comp/about/CourseInfo";
import Register from "@/pages-comp/about/info";
import Teacher from "@/pages-comp/about/teachers";
import { Course } from "@/types/cards";
// import {cache} from "react";

// const getCourse = cache(async (id: string): Promise<Course> => {
//     return await getAllData<Course>(`${ReadCourses}/${id}`);
// });

export default async function Page(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await props.params;

  const course = await getAllData<Course>(`${ReadCourses}/${id}`);
  const allCourses = await getAllData<Course[]>(ReadCourses);

  return (
    <div>
      {course && <Hero course={course} />}
      {course && <CourseInfoSection course={course} />}
      <Info courseData={course} />
      <FAQSection />
      <Teacher course={course} />
      {allCourses && <Register coursesData={allCourses} />}
      <ForWhomSection />
    </div>
  );
}
