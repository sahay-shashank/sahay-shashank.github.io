import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import { useTheme } from "@/context/theme";
import type { ProjectItem } from "@/types/projects";
import { Badge } from "@sahay-shashank/ui-library";
import Links from "./Links";
import { CodeBlock } from "@/components/codeBlock";

interface openSourceProjectsProps {
    projects: ProjectItem[]
}

export function OpenSourceProjects(props: openSourceProjectsProps) {
    const { theme } = useTheme();

    return (
        <section id="oss-projects">
            <div className="mb-4">
                <h3 className="text-2xl font-semibold">
                    OpenSource Projects
                </h3>
                <p className="-500 mt-2 italic">
                    Projects that love contributions
                </p>
            </div>
            <div className="grid gap-6 my-6 sm:grid-cols-2">


                {props.projects.map((project) => {
                    const Content = project.content
                    const CardChild = ({ expandable }: { expandable: boolean }) => (
                        <div className="flex flex-col p-6 h-full">

                            <div
                                className="w-full text-center justify-between items-center mb-6 space-y-4"
                            >
                                <span className="font-semibold text-2xl">{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p className="italic text-(--subtext) mt-2">{project.metadata.subtitle}</p>)}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.metadata.badges && project.metadata.badges.map((badge, index) => (
                                        <Badge key={`badge_${index}`} label={badge.label} color={badge.color} />
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


        </section >
    )
}