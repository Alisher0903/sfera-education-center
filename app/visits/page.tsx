import VisitsCard from "@/components/cards/VisitsCard"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import {Visit} from "@/helpers/api";
import {getAllData} from "@/helpers/request";

const Visits = async () => {
    const VisitsData = await getAllData(Visit);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10 ">
                <SectionTitle title="TASHRIFLAR"/>
                <div className="grid grid-cols-1 mt-10 gap-6 ">
                    {VisitsData?.map((visit: any, index: number) => (
                        <VisitsCard key={visit.id} visitData={visit} isLeft={index % 2 === 0}/>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Visits