import {FileText, X} from "lucide-react"
import colors from "@/lib/colors"

interface RegistrationModalProps {
    isOpen: boolean
    onClose: () => void
}

export function RegistrationModal({isOpen, onClose}: RegistrationModalProps) {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div
                className="rounded-2xl p-8 w-full max-w-xl relative"
                style={{backgroundColor: colors.green, color: colors.white}}
            >
                <button onClick={onClose} className="absolute top-4 right-4">
                    <X className="h-6 w-6" style={{color: colors.white}}/>
                </button>

                <div className="flex items-center gap-3 mb-8">
                    <FileText className="h-6 w-6" style={{color: colors.white}}/>
                    <h2 className="text-2xl font-medium">Ro&apos;yxatdan o&apos;tish</h2>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-lg">
                            Ism, Familiya:
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ismingizni kiriting..."
                            className="w-full px-4 py-4 rounded-lg focus:outline-none"
                            style={{
                                backgroundColor: colors.white,
                                color: colors.grayText,
                            }}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-lg">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                id="phone"
                                type="email"
                                placeholder="Emailingizni kiriting..."
                                className="w-full px-4 py-4 rounded-lg focus:outline-none"
                                style={{
                                    backgroundColor: colors.white,
                                    color: colors.grayText,
                                }}
                            />

                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-lg">
                            Yangi parol:
                        </label>
                        <input
                            id="password"
                            type="text"
                            placeholder="6-32 oralig’ida parol yarating..."
                            className="w-full px-4 py-4 rounded-lg focus:outline-none"
                            style={{
                                backgroundColor: colors.white,
                                color: colors.grayText,
                            }}
                        />
                    </div>
                    <button
                        className="w-full border-2  px-3 py-3 rounded-lg focus:outline-none"
                        style={{borderColor: colors.white}}
                    >
                        Yuborish
                    </button>


                </form>
            </div>
        </div>
    )
}
