import { loadHobby } from "@/controllers/loadHobby"
import type { HobbyItem } from "@/types/hobby"
import { useEffect, useState } from "react"
import { MDXWrapper } from "@/components/mdxWrapper"
import Card from "../Hobby/HobbyCard"


function HobbySection() {
    const [items, setItems] = useState<HobbyItem[]>([])

    useEffect(() => {
        loadHobby().then(setItems)
    }, [])

    return (
        <section id="night-job" className="px-6 py-6">

            <div className="mb-12">
                <h2 className="text-3xl font-bold">
                    Night Job
                </h2>

                <p className="text-gray-500 mt-2 max-w-xl">
                    The interests and hobbies that keep me curious and creative.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {items.map((item) => {
                    const Content = item.content
                    return <Card
                        className="p-6 border border-gray-700 rounded-xl"
                        key={item.metadata.title}
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            {item.metadata.icon} {item.metadata.title}
                        </h3>

                        <MDXWrapper>
                            <Content />
                        </MDXWrapper>
                    </Card>
                })}
            </div>

        </section>
    )
}

export default HobbySection
