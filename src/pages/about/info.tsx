import { InfoCard } from "@/components/cards/info"
import { RegistrationForm } from "@/components/cards/registration-form"
import SectionTitle from "@/components/SectionTitle/SectionTitle"

const Register = () => {
    return (
        <main className="container mx-auto p-4 py-10">
            <div className="py-10"><SectionTitle title="RO'YHATDAN O'TISH"/></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard />
                <RegistrationForm />
            </div>
            <div className="flex justify-center py-10">
                <button className="bg-[#1CA855] text-white py-3 px-50 rounded-xl">Yuborish</button>
            </div>
        </main>
    )

}
export default Register