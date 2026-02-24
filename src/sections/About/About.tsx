import { loadAboutSection } from "@/controllers/about/loadSection"
import { MDXWrapper } from "@/components/mdxWrapper"
import type { SectionContent } from "@/types/section"
import { useEffect, useState } from "react"
import DayJobSection from "@/sections/About/CareerSection"
import HobbySection from "@/sections/About/HobbySection"

function About() {
    const [aboutSectionContent, setAboutSectionContent] = useState<SectionContent | null>(null)

    useEffect(() => {
        loadAboutSection().then(setAboutSectionContent)
    }, [])

    if (!aboutSectionContent) return null;
    const AboutContent = aboutSectionContent.content

    return (
        <section id="about" className="px-6 py-20 border-t border-gray-200">
            {/* Title Block */}
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold">
                    {aboutSectionContent.metadata.title}
                </h1>

                <p className="text-(--subtext) mt-2">
                    {aboutSectionContent.metadata.subtitle}
                </p>
            </div>

            {/* Content Block */}
            <div>
                <MDXWrapper>
                    <AboutContent />
                </MDXWrapper>
            </div>

            <DayJobSection />
            <HobbySection />
        </section>
    )
}

export default About