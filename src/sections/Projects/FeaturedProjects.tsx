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
        <section id="featured-projects" className="px-6 py-6 mb-12">

            <div className="mb-4">
                <h3 className="text-2xl md:text-4xl font-semibold heading-font">
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
                                <span className="font-semibold text-2xl md:text-4xl heading-font">{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p className="italic text-(--subtext) mt-2">{project.metadata.subtitle}</p>)}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.metadata.badges && project.metadata.badges.map((badge, index) => (
                                        <Badge className="code-font" key={`badge_${index}`} label={badge.label} color={badge.color} />
                                    ))}
                                </div>
                            </div>
                            <div className={!expandable ? `line-clamp-3 md:line-clamp-7` : ""}>
                                <MDXWrapper components={{ CodeBlock }}>
                                    <Content />
                                </MDXWrapper>
                            </div>
                            <div className="mt-auto flex justify-end">
                                <Links project={project} theme={!expandable ? theme : "dark"} />
                            </div>
                        </div>
                    )
                    return (
                        <Card.Parallax key={`card_container_${project.metadata.title}`} index={index} targetScale={targetScale} progress={scrollYProgress} range={[index * .025, 1]}>
                            <Card clickable modalContent={<CardChild expandable />} key={`card_${project.metadata.title}`} className="my-6 bg-(--bg) w-[80vw] md:min-h-[40vh]">
                                <CardChild key={`cardChild_${project.metadata.title}`} expandable={false} />
                            </Card>
                        </Card.Parallax>
                    )
                })}
            </div>


        </section >
    )
}
