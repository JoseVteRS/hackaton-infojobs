import { JobsSection } from "@/components/sections/Jobs"
import { LenguagesSection } from "@/components/sections/Lenguages"

const JobsPage = () => {
  return (
    <div>
          <h3 className="my-6 text-2xl text-black/80 font-semibold">
              Trabajos
          </h3>

          <JobsSection />

    </div>
  )
}

export default JobsPage