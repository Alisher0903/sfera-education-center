import BackendCard from "@/components/cards/courses";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {NewCourses} from "@/helpers/api";
import type {Metadata} from "next";
import {defaultMetadata} from "@/lib/seo";
import {getAllData} from "@/helpers/request";

export const metadata: Metadata = {
    ...defaultMetadata,
    title: "Sfera Academy | Kurslar",
};

const Courses = async () => {
    const newStudentData = await getAllData(NewCourses);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-20">
                <div className="py-10"><SectionTitle title="KURSLARIMIZ"/></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {newStudentData.map((course: any) => (
                        <BackendCard
                            key={course.id}
                            courseTitle={course.course.name}
                            start_date={course.start_date}
                            duration={course.course.course_duration}
                            price={course.price}
                            instructorName={course.teacher.name}
                            instructorImage={course.teacher.photo}
                            photo={course.teacher.photo}
                            image={course.course.photo}
                        />
                    ))}
                    {newStudentData.map((course: any) => (
                        <BackendCard
                            key={course.id}
                            courseTitle={course.course.name}
                            start_date={course.start_date}
                            duration={course.course.course_duration}
                            price={course.price}
                            instructorName={course.teacher.name}
                            instructorImage={course.teacher.photo}
                            photo={course.teacher.photo}
                            image={course.course.photo}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;


