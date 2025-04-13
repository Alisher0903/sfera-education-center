import InfoCard from "@/components/cards/infoCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const infoCards = [
    {
        image: "/home/info.png",
        title: "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info1.png",
        title: "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. ",
    },
    {
        image: "/home/info2.png",
        title: "Frontend dasturchilar foydalanuvchi interfeysini ishlab chiqadilar va dizaynni interaktiv elementlarga aylantiradilar. Ular ",
    },
    {
        image: "/home/info3.png",
        title: "Frontend dasturchining asosiy vazifasi — foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. ",
    },
];
const Info = () => {
    return (
        <section className='w-full px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto py-10  sm:px-6 md:px-10 lg:px-16 xl:px-20">
                <div className="py-10"><SectionTitle title="KURS HAQIDA BATAFSIL" /></div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 items-start'>
                    {infoCards.map((card, index) => (
                        <InfoCard
                            key={index}
                            image={card.image}
                            title={card.title}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Info