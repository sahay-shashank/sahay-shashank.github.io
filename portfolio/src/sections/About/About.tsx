import { loadAbout } from "@/controllers/loadAbout"
import { MDXWrapper } from "@/components/mdxWrapper"
import type { AboutContent } from "@/types/about"
import { useEffect, useState } from "react"
import DayJobSection from "@/sections/About/DayJobSection"
import HobbySection from "@/sections/About/HobbySection"

function About() {
    const [about, setAbout] = useState<AboutContent | null>(null)

    useEffect(() => {
        loadAbout().then(setAbout)
    }, [])

    if (!about) return null;
    const AboutContent = about.content

    return (
        <section id="about" className="px-6 py-6">

            {/* Title Block */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold">
                    {about.metadata.title}
                </h2>

                <p className="text-gray-500 mt-2">
                    A quick introduction about who I am and what I build.
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