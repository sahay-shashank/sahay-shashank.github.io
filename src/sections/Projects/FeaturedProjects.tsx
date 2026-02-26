import Card from "@/components/Card";
import { useRef } from "react"
import type { ProjectItem } from "@/types/projects";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useScroll } from "framer-motion";
import { Badge } from "@sahay-shashank/ui-library";

import { useTheme } from "@/context/theme";
import Links from "./Links";
import { CodeBlock } from "@/components/codeBlock";

interface featureProjectsProps {
    projects: ProjectItem[]
}

export function FeaturedProjects(props: featureProjectsProps) {
    const container = useRef(null);
    const { theme } = useTheme();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <section id="featured-projects">

            <div className="mb-4">
                <h3 className="text-2xl font-semibold">
                    Featured Projects
                </h3>
                <p className="text-(--subtext) mt-2 italic">
                    Steaming-Hot Projects
                </p>
            </div>
            <div ref={container} className="gap-4">

                {props.projects.map((project, index, arr) => {
                    const targetScale = 1 - ((arr.length - index - 1) * 0.05);
                    const Content = project.content

                    const CardChild = ({ expandable }: { expandable: boolean }) => (
                        <div className="flex flex-col p-6 h-full">
                            <div
                                className="w-full text-center justify-between items-center mb-6 space-y-4"
                            >
                                <span className="font-semibold text-4xl">{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p className="italic text-(--subtext) mt-2">{project.metadata.subtitle}</p>)}
                                {project.metadata.badges && project.metadata.badges.map((badge, index, arr) => (
                                    <>
                                        <Badge key={index} label={badge.label} color={badge.color} />
                                        {(index < arr.length) && (" ")}
                                    </>
                                ))}
                            </div>
                            <div className={!expandable ? `line-clamp-3 md:line-clamp-10` : ""}>
                                <MDXWrapper components={{ Badge, CodeBlock }}>
                                    <Content />
                                </MDXWrapper>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <Links project={project} theme={!expandable ? theme : "dark"} />
                            </div>
                        </div>
                    )
                    return (
                        <Card.Parallax key={`card_container_${index}`} index={index} targetScale={targetScale} progress={scrollYProgress} range={[index * .025, 1]}>
                            <Card clickable modalContent={<CardChild expandable />} key={`card_${index}`} className="bg-(--bg) w-[80vw] md:min-h-[40vh]">
                                <CardChild expandable={false} />
                            </Card>
                        </Card.Parallax>
                    )
                })}
            </div>


        </section>
    )
}
