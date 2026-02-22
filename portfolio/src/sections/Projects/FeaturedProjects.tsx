import Card from "@/components/Card";
import { useRef } from "react"
import type { ProjectItem } from "@/types/projects";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useScroll } from "framer-motion";
import { Badge } from "@/components/Badge";

interface featureProjectsProps {
    projects: ProjectItem[]
}

export function FeaturedProjects(props: featureProjectsProps) {
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
                {props.projects.map((project, index, arr) => {
                    const targetScale = 1 - ((arr.length - index) * 0.05);
                    const Content = project.content
                    const CardChild = () => (
                        <>
                            <div
                                className="w-full text-left flex justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                            </div>
                            {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}
                            <MDXWrapper components={{ Badge }}>
                                <Content />
                            </MDXWrapper>
                        </>
                    )
                    return (
                        <Card.Parallax key={`card_container_${index}`} index={index} targetScale={targetScale} progress={scrollYProgress} range={[index * .025, 1]}>
                            <Card key={`card_${index}`} className="bg-(--bg) h-fit w-fit">
                                <CardChild />
                            </Card>
                        </Card.Parallax>
                    )
                })}
            </div>


        </section>
    )
}
