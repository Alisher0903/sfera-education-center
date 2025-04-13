import SectionTitle from "@/components/SectionTitle/SectionTitle"
import Image from "next/image"
import colors from "@/lib/colors"
import { TeamMember } from "@/types/cards"

export default function Teacher() {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Abdul Aziz Saidov",
            title: "Strong junior",
            image: "/home/teacher.png",
        },
    ]

    return (
        <section className="py-10" style={{color: colors.green}}>
            <div className="mb-10">
                <SectionTitle title="FRONTEND O'QITUVCHILARI" />
            </div>
            <div style={{ backgroundColor: colors.green }}>
                <div className="container mx-auto pt-10 ">
                    <div className="flex flex-col md:flex-row">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="">
                                <div className="flex justify-between md:justify-start">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        width={250}
                                        height={250}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between md:flex-row">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex-1 pl-8 py-4">
                            <h3 className="text-xl">{member.name}</h3>
                            <p style={{color:colors.grayText}}>{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
