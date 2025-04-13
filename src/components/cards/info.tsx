import { Info } from "lucide-react"

export function InfoCard() {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 w-full mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center">
          <Info className="h-3.5 w-3.5" />
        </div>
        <h2 className="text-2xl font-medium text-gray-900">Ta'lim haqida</h2>
      </div>

      <ul className="space-y-5">
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Ta'lim guruhda olib boriladi.</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Har bir guruh 15 kishidan iborat.</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Bir oyda 8 ta mashg'ulot bo'ladi.</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Har bir dars — 90 daqiqa davom etadi.</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Kurs jami — 80 ta darsdan iborat.</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-400 mr-3 mt-1">•</span>
          <span className="text-gray-600">Haftasiga 2 ta dars o'tiladi.</span>
        </li>
      </ul>
    </div>
  )
}
