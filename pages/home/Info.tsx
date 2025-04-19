import InfoCard from "@/components/cards/infoCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export const infoCards = [
    {
        image: "/home/info.png",
        title: "O‘qituvchilarimiz katta tajribaga ega",
        description:
            "Bizning o‘quv markazimizda o‘z yo‘nalishlari bo‘yicha 1 yildan 3 yilgacha bo‘lgan tajribaga ega o‘qituvchilar ta'lim beradi.",
    },
    {
        image: "/home/info1.png",
        title: "Muloqot",
        description:
            "Darslar davomida fikr almashish uchun 15 daqiqalik tanaffus qilishingiz mumkin. Bu bolalarga muloqotini va fikrlashishini o‘stirishga yordam beradi.",
    },
    {
        image: "/home/info2.png",
        title: "Biz sizga ish topishga yordam beramiz",
        description:
            "Markazimizda zamonaviy sohalarda bo‘sh ish o‘rinlarini topishga yordam beruvchi bo‘limi mavjud.",
    },
    {
        image: "/home/info3.png",
        title: "Sertifikatga ega bo‘lishingiz mumkin!",
        description:
            "Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Sfera Academiyasi” ning diplom va sertifikatiga ega bo‘ladi.",
    },
];
const Info = () => {
    return (
        <section className='w-full px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto py-10">
                <div className="py-10"><SectionTitle title="AFZALLIKLARIMZ" /></div>
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