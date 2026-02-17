import Card from "@/components/Card";
import { useEffect, useRef, useState } from "react"
import { loadProject } from "@/controllers/projects/loadProject";
import type { ProjectItem } from "@/types/projects";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useScroll } from "framer-motion";

export function FeaturedProjects() {
    const [featureProjects, setFeatureProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        loadProject().then(setFeatureProjects)
    }, [])
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <section id="featured-projects">

            <div ref={container} className="gap-4">
                <h3 className="text-2xl font-semibold">
                    Featured Projects
                </h3>
                <p className="text-gray-500 mt-2">
                    Steaming-Hot Projects
                </p>
                {featureProjects.map((project, index) => {
                    if (!project.metadata.featured) return null;
                    const targetScale = 1 - ((featureProjects.length - index) * 0.05);
                    const Content = project.content
                    const CardChild = () => (
                        <>
                            <div
                                className="w-full text-left flex justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                            </div>
                            {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}
                            <MDXWrapper>
                                <Content />
                            </MDXWrapper>
                        </>
                    )
                    return (
                        <Card.Parallax key={`card_container_${index}`} index={index} targetScale={targetScale} progress={scrollYProgress} range={[index * .025, 1]}>
                            <Card key={`card_${index}`} className="bg-(--bg) h-[65vh] w-[80vw]">
                                <CardChild />
                            </Card>
                        </Card.Parallax>
                    )
                })}
            </div>


        </section>
    )
}
