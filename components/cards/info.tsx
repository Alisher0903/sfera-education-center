import { Info } from "lucide-react"
import colors from "@/lib/colors"

export function InfoCard() {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 w-full mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 rounded-full  flex items-center justify-center">
          <Info className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-medium ">Ta&apos;lim haqida</h2>
      </div>

      <ul className="space-y-5">
        <li className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Ta&apos;lim guruhda olib boriladi.</span>
        </li>
        <li  className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Har bir guruh 15 kishidan iborat.</span>
        </li>
        <li  className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Bir oyda 8 ta mashg&apos;ulot bo&apos;ladi.</span>
        </li>
        <li  className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Har bir dars — 90 daqiqa davom etadi.</span>
        </li>
        <li  className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Kurs jami — 80 ta darsdan iborat.</span>
        </li>
        <li  className="flex items-center gap-5 text-xl" style={{color:colors.grayText}}>
          <span>•</span>
          <span>Haftasiga 2 ta dars o&apos;tiladi.</span>
        </li>
      </ul>
    </div>
  )
}
