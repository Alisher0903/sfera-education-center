import Image from "next/image"
import Link from "next/link"
import { TeamMemberCardProps } from "@/types/cards"

export default function TeamMemberCard({ name, position, imageSrc, socialLinks }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border-2 border-[#1CA855] bg-white overflow-hidden max-w-sm w-full">
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
        <h3 className="text-2xl font-bold text-[#1CA855] mb-1">{name}</h3>
        <p className="text-gray-400 mb-5">{position}</p>

        <div className="flex space-x-5">
          {socialLinks.instagram && (
            <Link href={socialLinks.instagram} className="text-gray-400 hover:text-[#1CA855] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          )}

          {socialLinks.facebook && (
            <Link href={socialLinks.facebook} className="text-gray-400 hover:text-[#1CA855] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
          )}

          {socialLinks.twitter && (
            <Link href={socialLinks.twitter} className="text-gray-400 hover:text-[#1CA855] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          )}

          {socialLinks.telegram && (
            <Link href={socialLinks.telegram} className="text-gray-400 hover:text-[#1CA855] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13"></path>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span className="sr-only">Telegram</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
