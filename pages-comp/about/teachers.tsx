"use client";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import colors from "@/lib/colors";
import { URL } from "@/helpers/api";

export default function Teacher({ course }: { course: any }) {
  return (
    <section className="py-10 " style={{ color: colors.green }}>
      <div className="mb-10">
        <SectionTitle title="FRONTEND O'QITUVCHILARI" />
      </div>
      <div className="bg-amber-400   overflow-x-scroll ">
        <div className="flex gap-10  h-[330px]">
          {course.teachers.map((member: any) => (
            <div key={member.id} className="">
              <div className="h-60 w-60 ">
                <Image
                  src={`${URL}${member.photo}`}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
                
                  <h3 className="text-xl text-center mb-2 mt-2 text-black">
                    {member.name}
                  </h3>
                  <p
                    className="text-center text-sm"
                    style={{ color: colors.grayText }}
                  >
                    {member.level}
                  </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
