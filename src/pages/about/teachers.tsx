import SectionTitle from "@/components/SectionTitle/SectionTitle"
import Image from "next/image"
import colors from "@/lib/colors"
import { TeamMember } from "@/types/cards"
import { URL } from "@/helpers/api"

export default function Teacher({ course }: { course: any }) {
    

    return (
        <section className="py-10" style={{color: colors.green}}>
            <div className="mb-10">
                <SectionTitle title="FRONTEND O'QITUVCHILARI" />
            </div>
            <div style={{ backgroundColor: colors.green }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-between md:flex-row">
                        {course.teachers.map((member:TeamMember) => (
                            <div key={member.id} className="">
                                <div className="">
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
                <div className="flex flex-col justify-between md:flex-row">
                    {course.teachers.map((member:TeamMember) => (
                        <div key={member.id} className="flex-1 pl-8 py-4">
                            <h3 className="text-xl">{member.name}</h3>
                            <p style={{color:colors.grayText}}>{member.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
