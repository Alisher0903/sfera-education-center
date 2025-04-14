
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import colors from "@/lib/colors"
import Image from "next/image";

const achievements = [
    {
        id: 1,
        title: 'Start Up Weekend',
        description:
            'Start Up Weekendda "SFERA ACADEMY" jamoasi azolari "Medical card" va "Rentify" start up g\'oyalari orqali ikkinchi va uchinchi o\'rinlarni qo\'lga kiritishdi!',
        image: '/home/values.png'
    },
    {
        id: 2,
        title: 'Start Up Weekend',
        description:
            'Start Up Weekendda "SFERA ACADEMY" jamoasi azolari "Medical card" va "Rentify" start up g\'oyalari orqali ikkinchi va uchinchi o\'rinlarni qo\'lga kiritishdi!',
        image: '/home/values.png'
    },
];

export default function Values() {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-20">
                <div className="my-10">
                    <SectionTitle title="YUTUQLARIMIZ" />
                </div>
                {achievements.map((achievement) => (
                    <div
                        key={achievement.id}
                        className=" "
                    >
                        <div className="">
                            <div
                                className={`lg:flex justify-center items-center   ${achievement.id % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: colors.green }}>
                                        {achievement.title}
                                    </h2>
                                    <p className="text-lg  leading-relaxed mb-8 text-center px-20" >
                                        {achievement.description}
                                    </p>
                                </div>
                                <div className="lg:w-1/2 mt-8 lg:mt-0">
                                    <div className="overflow-hidden ">
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            width={500}
                                            height={600}
                                            className="w-full "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
