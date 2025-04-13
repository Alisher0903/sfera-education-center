import InfoCard from "@/components/cards/infoCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const infoCards = [
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
    {
        image: "/home/info.png",
        title: "Biz yuqori ta’lim sifatiga intilamiz",
        description: "Frontend dasturchining asosiy vazifasi —foydalanuvchi uchun qulay, tezkor va jozibali interfeys yaratishdir. Bu esa nafaqat texnik ",
    },
];
const Info = () => {
    return (
        <section className='w-full px-4 sm:px-6 lg:px-8 mb-10'>
            <div className="max-w-7xl mx-auto py-10 ">
                <div className="py-10"><SectionTitle title="Qadriyatlarimiz" /></div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10'>
                    {infoCards.map((card, index) => (
                        <InfoCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Info