import { loadHobby } from "@/controllers/hobby/loadHobby"
import type { HobbyItem } from "@/types/hobby"
import { useEffect, useState } from "react"
import { MDXWrapper } from "@/components/mdxWrapper"
import Card from "@/components/Card"
import { loadHobbySection } from "@/controllers/hobby/loadSection"
import type { SectionContent } from "@/types/section"


function HobbySection() {
    const [items, setItems] = useState<HobbyItem[]>([])
    const [hobbySectionContent, setHobbySectionContent] = useState<SectionContent | null>(null)

    useEffect(() => {
        loadHobbySection().then(setHobbySectionContent)
        loadHobby().then(setItems)
    }, [])


    useEffect(() => {
    }, [])
    if (!hobbySectionContent) return null;
    const HobbyContent = hobbySectionContent.content
    return (
        <section id="hobby" className="py-6">

            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                    {hobbySectionContent.metadata.title}
                </h2>

                <p className="text-(--subtext) mt-2 italic">
                    {hobbySectionContent.metadata.subtitle}
                </p>
            </div>

            <div>
                <MDXWrapper>
                    <HobbyContent />
                </MDXWrapper>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {items.map((item) => {
                    const Content = item.content
                    const CardChild = ({ expand }: { expand: boolean }) => (<>
                        <h3 className="text-lg font-semibold mb-3">
                            {item.metadata.icon} {item.metadata.title}
                        </h3>
                        <div className={!expand ? `line-clamp-3` : ""}>

                            <MDXWrapper>
                                <Content />
                            </MDXWrapper>
                        </div>
                    </>)
                    return <Card clickable modalContent={<CardChild expand />} key={item.metadata.title}>
                        <CardChild expand={false} />
                    </Card>
                })}
            </div>

        </section>
    )
}

export default HobbySection
