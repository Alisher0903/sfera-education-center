import FeatureCard from "@/components/cards/featureCard"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
const features = [
    {
        title: "Malakali O’qituvchilar",
        description: "Yetuk mutaxassislar sizga chuqur bilim va amaliy ko‘nikmalarni kafolatlaydi.",
        highlight: "3 yillik tajribaga ega ustozlar jamoasi",
        iconSrc: "/home/featur.png",
        variant: "green",
    },
    {
        title: "Bepul Networking",
        description: "O‘z sohasidagi professional bilan aloqalar o‘rnatish imkonini beradi.",
        highlight: "Hamfikrlar va sohaga oid aloqalar",
        iconSrc: "/home/feature1.png",
        variant: "white",
    },
    {
        title: "Yuqori Tajriba",
        description: "O‘quv davomida real loyihalar orqali amaliy tajriba orttirasiz.",
        highlight: "Real loyihalar bilan o‘rganish imkoniyati",
        iconSrc: "/home/feature2.png",
        variant: "white",
    },
    {
        title: "Sifatli Ta’lim",
        description: "Darslar innovatsion yondashuv asosida o‘tilib, bilimlar mustahkamlanadi.",
        highlight: "Nazariy va amaliy bilimlar uyg‘unligi",
        iconSrc: "/home/feature3.png",
        variant: "green"
    },
]
const Feature = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10  sm:px-6 md:px-10 lg:px-16 xl:px-20">
                <div className="mb-10">
                    <SectionTitle title="NEGA BIZNI TANLASH KERAK?" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            highlight={feature.highlight}
                            iconSrc={feature.iconSrc}
                            variant={feature.variant}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Feature