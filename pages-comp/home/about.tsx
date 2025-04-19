import { CountCard } from "@/components/cards/countCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import colors from "@/lib/colors";

const About = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="pt-20">
                <div className="mb-10">
                    <SectionTitle title="BIZ HAQIMIZDA" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                        className="m-5 border-b md:border-b-0 md:border-r"
                        style={{ borderColor: colors.green }}
                    >
                        <CountCard
                            img="/home/count.png"
                            title="Bitirgan o'quvchilar"
                            value={200}
                            suffix="+"
                        />
                    </div>
                    <div
                        className="m-5 border-b md:border-b-0"
                        style={{ borderColor: colors.green }}
                    >
                        <CountCard
                            img="/home/courses2.png"
                            title="Loyihalar"
                            value={20}
                            suffix="+"
                        />
                    </div>
                    <div
                        className="m-5 md:border-r"
                        style={{ borderColor: colors.green }}
                    >
                        <CountCard
                            img="/home/courses1.png"
                            title="Ish olib borilmoqda"
                            value={3}
                            suffix=" YIL"
                        />
                    </div>
                    <div className="m-5" style={{ borderColor: colors.green }}>
                        <CountCard
                            img="/home/courses.png"
                            title="Jamoamiz a'zolari"
                            value={20}
                            suffix="+"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
