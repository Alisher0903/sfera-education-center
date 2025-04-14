import { InfoCard } from "@/components/cards/info"
import { RegistrationForm } from "@/components/cards/registration-form"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import colors from "@/lib/colors"

const Register = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="py-6 sm:py-10">
                <SectionTitle title="RO'YHATDAN O'TISH" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard />
                <RegistrationForm />
            </div>
            <div className="flex justify-center py-10">
                <button
                    className="py-3 px-8 w-full md:w-[50%] rounded-xl text-base sm:text-lg font-medium transition duration-300"
                    style={{
                        color: colors.white,
                        border: `2px solid ${colors.green}`,
                        backgroundColor: colors.green,
                    }}
                >
                    Yuborish
                </button>
            </div>
        </main>
    )
}
export default Register
