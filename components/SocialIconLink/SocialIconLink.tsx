import Link from "next/link"
import { ReactNode } from "react"

type SocialIconLinkProps = {
  href: string
  label: string
  children: ReactNode
}

export default function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-[#1CA855] transition-colors"
      aria-label={label}
    >
      {children}
    </Link>
  )
}
