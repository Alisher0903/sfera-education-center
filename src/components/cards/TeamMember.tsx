import Image from "next/image"
import SocialIconLink from "@/components/SocialIconLink/SocialIconLink"
import { TeamMemberCardProps } from "@/types/cards"
import { FaInstagram, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa'
import colors from "@/lib/colors"


const iconMap = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  telegram: FaTelegram,
}
export default function TeamMemberCard({ name, position, imageSrc, socialLinks }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden max-w-sm w-full" style={{color:colors.white, border: `2px solid ${colors.green}`}}>
      <div className="aspect-square relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 384px"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold  mb-1" style={{color:colors.green}}>{name}</h3>
        <p className=" mb-5" style={{color:colors.grayText}}>{position}</p>

        <div className="flex space-x-5">
          {Object.entries(socialLinks).map(([key, value]) => {
            const Icon = iconMap[key as keyof typeof iconMap]; 
            return value ? (
              <SocialIconLink key={key} href={value} label={key.charAt(0).toUpperCase() + key.slice(1)}>
                <Icon size={20} /> 
              </SocialIconLink>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}
