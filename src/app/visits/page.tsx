import VisitsCard from "@/components/cards/VisitsCard"
import SectionTitle from "@/components/SectionTitle/SectionTitle"

const visit = [
    {
        id: 1,
        title: 'Abduhamid Usarov',
        date: '2025-04-01',
        description: 'Abduhamid Usarov, 15 yillik IT sohasidagi ish faoliyati, RealSoft kompaniyasida sifat nazorat direktori bizning 2 yillik tadbirimizda ishtirok etaganlar.',
        image: '/home/team.png',
    },
    {
        id: 2,
        title: 'Abduhamid Usarov',
        date: '2025-04-01',
        description: 'Abduhamid Usarov, 15 yillik IT sohasidagi ish faoliyati, RealSoft kompaniyasida sifat nazorat direktori bizning 2 yillik tadbirimizda ishtirok etaganlar.',
        image: '/home/team.png',
    },
    {
        id: 3,
        title: 'Abduhamid Usarov',
        date: '2025-04-01',
        description: 'Abduhamid Usarov, 15 yillik IT sohasidagi ish faoliyati, RealSoft kompaniyasida sifat nazorat direktori bizning 2 yillik tadbirimizda ishtirok etaganlar.',
        image: '/home/team.png',
    },
    {
        id: 4,
        title: 'Abduhamid Usarov',
        date: '2025-04-01',
        description: 'Abduhamid Usarov, 15 yillik IT sohasidagi ish faoliyati, RealSoft kompaniyasida sifat nazorat direktori bizning 2 yillik tadbirimizda ishtirok etaganlar.',
        image: '/home/team.png',
    },
    {
        id: 5,
        title: 'Abduhamid Usarov',
        date: '2025-04-01',
        description: 'Abduhamid Usarov, 15 yillik IT sohasidagi ish faoliyati, RealSoft kompaniyasida sifat nazorat direktori bizning 2 yillik tadbirimizda ishtirok etaganlar.',
        image: '/home/team.png',
    },
]
const Visits = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-10">
            <div className="mt-30">
                <SectionTitle title="TASHRIFLAR" />
            </div>
            <div>
            {visit.map((visit, index) => (
                <VisitsCard key={visit.id} visitData={visit} isLeft={index % 2 === 0} />
            ))}
        </div>
        </div>
    </section>

    )
}

export default Visits