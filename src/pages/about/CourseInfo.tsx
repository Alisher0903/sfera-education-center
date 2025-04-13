import colors from '@/lib/colors' 

export default function CourseInfoSection() {
  const courseInfo = {
    totalLessons: 72,
    format: "Onlayn",
    duration: "6 oy",
    lessonDuration: "2 soat",
  }

  return (
    <div style={{ backgroundColor: colors.green, color: colors.white }} className="w-full p-6">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: colors.green }}
        >
          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Barcha darslar miqdori:</h3>
            <p className="text-2xl font-bold">{courseInfo.totalLessons} dars</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Ta&apos;lim formati:</h3>
            <p className="text-2xl font-bold">{courseInfo.format}</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Kurs davomiyligi:</h3>
            <p className="text-2xl font-bold">{courseInfo.duration}</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Dars davomiyligi:</h3>
            <p className="text-2xl font-bold">{courseInfo.lessonDuration}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
