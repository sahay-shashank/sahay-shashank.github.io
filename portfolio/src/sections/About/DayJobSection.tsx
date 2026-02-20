import { useEffect, useState } from "react"
import { loadTimeline } from "@/controllers/about/loadCareer"
import type { CareerTimelineItem } from "@/types/career"
import TimelineEntry from "@/components/TimelineEntry"
import { MDXWrapper } from "@/components/mdxWrapper"

function DayJobSection() {
    const [entries, setEntries] = useState<CareerTimelineItem[]>([])

    useEffect(() => {
        loadTimeline().then(setEntries)
    }, [])

    return (
        <section id="day-job" className="py-6">

            {/* Title Block */}
            <div>
                <h2 className="text-2xl font-bold">
                    Day Job
                </h2>

                <p className="text-gray-500 py-4">
                    My professional journey building platforms and automation systems.
                </p>
            </div>

            {/* Timeline Block */}
            <div className=" border-l border-gray-300">
                {entries.map((entry) => {
                    const Content = entry.content
                    const TimelineEntryChild = () => (
                        <MDXWrapper>
                            <Content />
                        </MDXWrapper>
                    )
                    console.log(entry)
                    return <TimelineEntry
                        key={entry.metadata.company}
                        title={entry.metadata.company}
                        subtitle={`${entry.metadata.role} • ${entry.metadata.start} - ${entry.metadata.end}`}
                        subtitleClassName="text-sm text-gray-500 mb-4"
                        pointer={<span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-blue-500 rounded-full" />}
                        className="relative pl-6"
                        titleClassName="text-xl font-medium"

                    >
                        <TimelineEntryChild />
                    </TimelineEntry>
                })}
            </div>
        </section >

    )
}

export default DayJobSection
