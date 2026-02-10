import { useEffect, useState } from "react"
import { loadTimeline } from "@/controllers/loadTimeline"
import type { TimelineItem } from "@/types/timeline"
import TimelineEntry from "@/components/TimelineEntry"
import { MDXWrapper } from "@/components/mdxWrapper"

function DayJobSection() {
    const [entries, setEntries] = useState<TimelineItem[]>([])

    useEffect(() => {
        loadTimeline().then(setEntries)
    }, [])

    return (
        <section id="day-job" className="px-6 py-6">

            {/* Title Block */}
            <div>
                <h2 className="text-3xl font-bold">
                    Day Job
                </h2>

                <p className="text-gray-500 py-4">
                    My professional journey building platforms and automation systems.
                </p>
            </div>

            {/* Timeline Block */}

            {entries.map((entry) => {
                const Content = entry.content
                const TimelineEntryChild = () => (
                    <MDXWrapper>
                        <Content />
                    </MDXWrapper>
                )

                return <TimelineEntry
                    key={entry.metadata.company}
                    title={entry.metadata.company}
                    subtitle={`${entry.metadata.role} • ${entry.metadata.start} - ${entry.metadata.end}`}
                    subtitleClassName="text-sm text-gray-500 mb-4"
                    pointer={<span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-blue-500 rounded-full" />}
                    className="relative border-l border-gray-300 pl-6 ml-2 mb-2"

                >
                    <TimelineEntryChild />
                </TimelineEntry>
            })}

        </section >

    )
}

export default DayJobSection
