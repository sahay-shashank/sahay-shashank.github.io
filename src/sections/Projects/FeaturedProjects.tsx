import Card from "@/components/Card";
import { useRef } from "react"
import type { ProjectItem } from "@/types/projects";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useScroll } from "framer-motion";
import { Badge } from "@sahay-shashank/ui-library";

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
                <p className="text-(--subtext) mt-2">
                    Steaming-Hot Projects
                </p>
                {props.projects.map((project, index, arr) => {
                    const targetScale = 1 - ((arr.length - index - 1) * 0.05);
                    const Content = project.content
                    const CardChild = ({ expandable }: { expandable: boolean }) => (
                        <>
                            <div
                                className="w-full text-center justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}

                            </div>
                            <div className={!expandable ? `line-clamp-3 md:line-clamp-10` : ""}>
                                <MDXWrapper components={{ Badge }}>
                                    <Content />
                                </MDXWrapper>
                            </div>
                        </>
                    )
                    return (
                        <Card.Parallax key={`card_container_${index}`} index={index} targetScale={targetScale} progress={scrollYProgress} range={[index * .025, 1]}>
                            <Card clickable modalContent={<CardChild expandable />} key={`card_${index}`} className="bg-(--bg) w-full">
                                <CardChild expandable={false} />
                            </Card>
                        </Card.Parallax>
                    )
                })}
            </div>


        </section>
    )
}
