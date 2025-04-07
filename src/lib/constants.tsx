import {Instagram, Phone, Send} from "lucide-react";
import {IHeader, INavItems} from "@/types/header";
import useTranslate from "@/lib/useTranslate";

export const useNavLinks = () => {
    const {lang} = useTranslate()
    const navItems: INavItems[] = [
        {id: 'home', name: lang('home'), link: '/'},
        {id: 'about', name: lang('about'), link: '/about'},
        {id: 'portfolio', name: lang('portfolio'), link: '/portfolio'},
        {id: 'courses', name: lang('courses'), link: '/courses'},
    ]
    return {navItems}
}

export const header_data: IHeader = {
    translateItems: [
        {id: "uz", name: "UZ", path: "/lang/uz.svg", mobileLabel: 'Uzbek'},
        {id: "en", name: "EN", path: "/lang/en.svg", mobileLabel: 'English'},
        {id: "ru", name: "RU", path: "/lang/ru.svg", mobileLabel: 'Russian'},
    ],
    networkItems: [
        {icon: <Phone className="w-6 h-6"/>, name: '78 113 60-62', link: 'tel:+998781136062', isStyle: true},
        {icon: <Send className="w-6 h-6"/>, link: 'https://t.me/sfera_academy'},
        {icon: <Instagram className="w-6 h-6"/>, link: 'https://instagram.com/sfera_academy'},
    ]
}

export const headerStyles = {
    links: 'relative text-gray-800 font-semibold text-base uppercase tracking-wider transition-all duration-300 ease-in-out group',
    menuBtn: 'w-6 h-6 absolute top-0 transition-all duration-300 ease-in-out',
    network: 'text-gray-800 transition-all duration-300 ease-in-out hover:text-green-600'
}

