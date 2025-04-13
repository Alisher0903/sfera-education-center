import TeamMemberCard from "@/components/cards/TeamMember"
import SectionTitle from "@/components/SectionTitle/SectionTitle"

const Teams = [
    {
        name: "John Doe",
        position: "Frontend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/johndoe",
            facebook: "https://www.facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            telegram: "https://t.me/johndoe",
        },
    },
    {
        name: "John Doe",
        position: "Frontend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/johndoe",
            facebook: "https://www.facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            telegram: "https://t.me/johndoe",
        },
    },
    {
        name: "John Doe",
        position: "Frontend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/johndoe",
            facebook: "https://www.facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            telegram: "https://t.me/johndoe",
        },
    },
    {
        name: "John Doe",
        position: "Frontend Developer",
        imageSrc: "/home/team.png",
        socialLinks: {
            instagram: "https://www.instagram.com/johndoe",
            facebook: "https://www.facebook.com/johndoe",
            twitter: "https://twitter.com/johndoe",
            telegram: "https://t.me/johndoe",
        },
    }
]
const Team = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10">
                    <SectionTitle title="BIZNING JAMOA" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                    {Teams.map((member) => (
                        <TeamMemberCard
                            key={member.name}
                            name={member.name}
                            position={member.position}
                            imageSrc={member.imageSrc}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Team