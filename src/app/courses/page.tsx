"use client"
import BackendCard from "@/components/cards/courses";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {courses} from "@/lib/constants";

const Courses = async () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-20 ">
                <div className="py-10"><SectionTitle title="KURSLARIMIZ" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course:any, index:number) => (
                        <BackendCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;