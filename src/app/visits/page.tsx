import VisitsCard from "@/components/cards/VisitsCard"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { Visit } from "@/helpers/api";

async function getVisitsData() {
    const res = await fetch(`${Visit}`, {
        cache: 'no-store',
    });

    return res.json();
}

const Visits = async () => {
    const VisitsData = await getVisitsData();
    
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-10">
            <div className="mt-30">
                <SectionTitle title="TASHRIFLAR" />
            </div>
            <div>
            {VisitsData.map((visit:any, index:number) => (
                <VisitsCard key={visit.id} visitData={visit} isLeft={index % 2 === 0} />
            ))}
        </div>
        </div>
    </section>

    )
}

export default Visits