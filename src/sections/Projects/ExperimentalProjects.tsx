import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useTheme } from "@/context/theme";
import type { ProjectItem } from "@/types/projects";
import { Badge } from "@sahay-shashank/ui-library";
import Links from "./Links";
import { CodeBlock } from "@/components/codeBlock";

interface experimentalProjectsProps {
    projects: ProjectItem[]
}

export function ExperimentalProjects(props: experimentalProjectsProps) {
    const { theme } = useTheme();

    return (
        <section id="experimental-projects" className="px-6 py-6">
            <div className="mb-4">

                <h3 className="text-2xl md:text-4xl font-semibold heading-font">
                    Experimental Projects
                </h3>
                <p className="text-(--subtext) mt-2 italic">
                    Trying to learn new stuffs
                </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 my-6">

                {props.projects.map((project) => {
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
                    return <Card clickable modalContent={<CardChild expandable />} key={`card_${project.metadata.title}`}>
                        <CardChild key={`cardChild_${project.metadata.title}`} expandable={false} />
                    </Card>
                })}
            </div>

        </section>
    )
}