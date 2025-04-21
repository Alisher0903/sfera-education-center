import SectionTitle from "@/components/SectionTitle/SectionTitle"
import Image from "next/image"
import colors from "@/lib/colors"
import {URL} from "@/helpers/api"

export default function Teacher({course}: { course: any }) {
    return (
        <section className="py-10" style={{color: colors.green}}>
            <div className="mb-10">
                <SectionTitle title="FRONTEND O'QITUVCHILARI"/>
            </div>
            <div className="flex  flex-col ">
                <div style={{backgroundColor: colors.green}}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-40 md:flex-row ">
                            {course.teachers.map((member: any) => (
                                <div key={member.id} className="">
                                    <div className=" mt-10">
                                        <Image
                                            src={`${URL}${member.photo}`}
                                            alt={member.name}
                                            width={250}
                                            height={250}

                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-75  md:flex-row">
                        {course.teachers.map((member: any) => (
                            <div key={member.id} className="">
                                <h3 className="text-xl text-center">{member.name}</h3>
                                <p className="text-center" style={{color: colors.grayText}}>{member.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
