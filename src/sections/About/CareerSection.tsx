import { useEffect, useState } from "react"
import { loadTimeline } from "@/controllers/career/loadCareer"
import type { CareerTimelineItem } from "@/types/career"
import TimelineEntry from "@/components/TimelineEntry"
import { MDXWrapper } from "@/components/mdxWrapper"
import { loadCareerSection } from "@/controllers/career/loadSection"
import type { SectionContent } from "@/types/section"

function DayJobSection() {
    const [entries, setEntries] = useState<CareerTimelineItem[]>([])
    const [careerSectionContent, setCareerSectionContent] = useState<SectionContent | null>(null)

    useEffect(() => {
        loadTimeline().then(setEntries)
        loadCareerSection().then(setCareerSectionContent)

    }, [])

    if (!careerSectionContent) return null;
    const CareerContent = careerSectionContent.content

    return (
        <section id="career" className="py-6">

            {/* Title Block */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                    {careerSectionContent.metadata.title}
                </h2>

                <p className="text-(--subtext) mt-2 italic">
                    {careerSectionContent.metadata.subtitle}
                </p>
            </div>

            <div>
                <MDXWrapper>
                    <CareerContent />
                </MDXWrapper>
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
                        subtitleClassName="text-sm text-(--subtext) mb-4"
                        pointer={<span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-blue-500 rounded-full" />}
                        className="relative pl-6 mb-4"
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
