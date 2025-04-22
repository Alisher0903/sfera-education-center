"use client"
import Link from "next/link"
import SectionTitle from "../SectionTitle/SectionTitle"
import Image from "next/image"
import { cn } from "@/lib/utils"
import SocialIconLink from "../SocialIconLink/SocialIconLink"
import { FaInstagram, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa'
import colors from "@/lib/colors"
import { useState } from "react"
import { RegistrationModal } from "@/components/auth/register"


const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  telegram: FaTelegram,
}
const socialLinks = {
  instagram: "https://instagram.com/yourprofile",
  facebook: "https://facebook.com/yourprofile",
  twitter: "https://twitter.com/yourprofile",
  telegram: "https://t.me/yourprofile",
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="bg-[#EAEAEA] w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-10">
        <div>
          <SectionTitle title="BIZ BILAN BOG'LANING" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 text-center sm:text-left">
          <div>
            <h3 className="text-xl pb-5">Foydali havolalar</h3>
            <div className="flex flex-col gap-2">
              <Link href=""><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Biz haqimizda</p></Link>
              <Link href="/visits"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Tashriflar</p></Link>
              <Link href="/"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Portfolio</p></Link>
              <Link href="/courses"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Kurslar</p></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl pb-5">Qo’shimcha</h3>
            <div className="flex flex-col gap-2">
              <Link href="/achievements"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Qadriyatlarimiz</p></Link>
              <Link href="/values"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Yutuqlarimiz</p></Link>
              <Link href="/photos"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Fotosuratlar</p></Link>
              <Link href="/privacy"><p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Maxfiylik siyosati</p></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl pb-5">Yordam</h3>
            <div className="flex flex-col gap-2">
              <p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`} onClick={() => setModalOpen(true)}>Ro’yxatdan o’tish</p>
              <p className={`text-[${colors.grayText}] text-base hover:text-[${colors.green}]`}>Tel: 78 113 60-62</p>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start ">
            <iframe style={{ borderColor: colors.green}}
              className="w-full border-1  h-48"
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

          <p className={`text-[${colors.grayText}] text-base`}>Sfera Academy - zamonaviy kasblar akademiyasi!</p>

          <div className="flex justify-center space-x-5">
            {["instagram", "facebook", "twitter", "telegram"].map((platform) => {
              const Icon = iconMap[platform as keyof typeof iconMap]
              const href = socialLinks[platform as keyof typeof socialLinks] || "#"
              return (
                <SocialIconLink key={platform} href={href} label={platform.charAt(0).toUpperCase() + platform.slice(1)}>
                  <Icon size={20} color={colors.grayText} />
                </SocialIconLink>
              )
            })}
          </div>
        </div>

      </div>
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
