import Image from "next/image";
// import SocialIconLink from "@/components/SocialIconLink/SocialIconLink"
import { TeamMemberCardProps } from "@/types/cards";
// import { FaInstagram, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa'
import colors from "@/lib/colors";
import { URL } from "@/helpers/api";
import Link from "next/link";

// const iconMap = {
//   instagram: FaInstagram,
//   facebook: FaFacebook,
//   twitter: FaTwitter,
//   telegram: FaTelegram,
// }
export default function TeamMemberCard({
  name,
  level,
  photo,
}: TeamMemberCardProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden max-w-[384px]  w-full"
      style={{ color: colors.white, border: `2px solid ${colors.green}` }}
    >
      <div className="aspect-square relative">
        <Image
          src={`${URL}${photo}`}
          alt={name}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 384px"
          priority
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold  mb-1" style={{ color: colors.green }}>
          {name}
        </h3>
        <p className=" mb-5" style={{ color: colors.grayText }}>
          {level}
        </p>

        <div style={{ color: colors.grayText }} className="flex gap-2">
          <Link href="https://www.instagram.com/">
            <Image
              src="/tarmoq/ant-design_instagram-filled.svg"
              alt="telegram"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src="/tarmoq/gg_facebook.svg"
              alt="telegram"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://twitter.com/">
            <Image
              src="/tarmoq/ri_twitter-fill.svg"
              alt="telegram"
              width={28}
              height={28}
            />
          </Link>
          <Link href="https://t.me/">
            <Image
              src="/tarmoq/mingcute_telegram-fill.svg"
              alt="telegram"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
