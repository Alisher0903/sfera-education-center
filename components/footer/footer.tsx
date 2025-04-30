"use client";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import {cn} from "@/lib/utils";
import SocialIconLink from "../SocialIconLink/SocialIconLink";
import {FaInstagram, FaFacebook, FaTwitter, FaTelegram} from "react-icons/fa";
import colors from "@/lib/colors";
import {useState} from "react";
import {RegistrationModal} from "@/components/auth/register";
import {raleway} from "@/app/fonts/fonts";

const iconMap = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    twitter: FaTwitter,
    telegram: FaTelegram,
};

const socialLinks = {
    instagram: "https://instagram.com/yourprofile",
    facebook: "https://facebook.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    telegram: "https://t.me/yourprofile",
};

const footerContent = {
    sectionTitle: "BIZ BILAN BOG'LANING",
    usefulLinks: {
        title: "Foydali havolalar",
        links: [
            {text: "Biz haqimizda", href: ""},
            {text: "Tashriflar", href: "/visits"},
            {text: "Portfolio", href: "/"},
            {text: "Kurslar", href: "/courses"},
        ],
    },
    additional: {
        title: "Qo’shimcha",
        links: [
            {text: "Qadriyatlarimiz", href: "/achievements"},
            {text: "Yutuqlarimiz", href: "/values"},
            {text: "Fotosuratlar", href: "/photos"},
            {text: "Maxfiylik siyosati", href: "/privacy"},
        ],
    },
    help: {
        title: "Yordam",
        registration: "Ro’yxatdan o’tish",
        phone: "Tel: 78 113 60-62",
    },
    slogan: "Sfera Academy - zamonaviy kasblar akademiyasi!",
};

export default function Footer() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className={cn(
            "bg-[#EAEAEA] w-full px-4 sm:px-6 lg:px-8",
            raleway.className
        )}>
            <div className="max-w-7xl mx-auto py-10">
                <div>
                    <SectionTitle title={footerContent.sectionTitle}/>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 py-10 text-center sm:text-left">
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-xl pb-5">{footerContent.usefulLinks.title}</h3>
                        <div className="flex flex-col gap-2">
                            {footerContent.usefulLinks.links.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <p
                                        style={{
                                            color: colors.grayText,
                                        }}
                                        className={`text-base hover:text-[${colors.green}]`}
                                    >
                                        {link.text}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-xl pb-5">{footerContent.additional.title}</h3>
                        <div className="flex flex-col gap-2">
                            {footerContent.additional.links.map((link, index) => (
                                <Link key={index} href={link.href}>
                                    <p
                                        style={{
                                            color: colors.grayText,
                                        }}
                                        className={`text-base hover:text-[${colors.green}]`}
                                    >
                                        {link.text}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-xl pb-5">{footerContent.help.title}</h3>
                        <div className="flex flex-col gap-2">
                            <p
                                style={{
                                    color: colors.grayText,
                                }}
                                className={`text-base hover:text-[${colors.green}] cursor-pointer`}
                                onClick={() => setModalOpen(true)}
                            >
                                {footerContent.help.registration}
                            </p>
                            <p
                                style={{
                                    color: colors.grayText,
                                }}
                                className={`text-base hover:text-[${colors.green}]`}
                            >
                                {footerContent.help.phone}
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center sm:justify-start">
                        <iframe
                            style={{borderColor: colors.green}}
                            className="min-w-[300px] sm:w-min-w-[400px] lg:min-w-[450px] border-1 h-56"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.360900826398!2d65.79398997580802!3d38.847095071734884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea7c4fd4eba1f%3A0xf1596ab7a01647b6!2sSfera%20Academy!5e0!3m2!1sen!2s!4v1731762979860!5m2!1sen!2s"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10 text-center">
                    <Image
                        src="/sfera-logo.png"
                        alt="SFERA Academy"
                        className={cn("scale-[115%]")}
                        width={130}
                        height={40}
                    />

                    <p
                        style={{
                            color: colors.grayText,
                        }}
                        className="text-base"
                    >
                        {footerContent.slogan}
                    </p>

                    <div className="flex justify-center space-x-5">
                        {["instagram", "facebook", "twitter", "telegram"].map(
                            (platform) => {
                                const Icon = iconMap[platform as keyof typeof iconMap];
                                const href =
                                    socialLinks[platform as keyof typeof socialLinks] || "#";
                                return (
                                    <SocialIconLink
                                        key={platform}
                                        href={href}
                                        label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                                    >
                                        <Icon size={20} color={colors.grayText}/>
                                    </SocialIconLink>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
            <RegistrationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
}
