import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import type { ProjectItem } from "@/types/projects";
import { Badge } from "@sahay-shashank/ui-library";

interface openSourceProjectsProps {
    projects: ProjectItem[]
}

export function OpenSourceProjects(props: openSourceProjectsProps) {
    return (
        <section id="oss-projects">
            <h3 className="text-2xl font-semibold">
                OpenSource Projects
            </h3>
            <p className="-500 mt-2">
                Projects that love contributions
            </p>
            <div className="grid gap-6 my-6 sm:grid-cols-2">


                {props.projects.map((project) => {
                    const Content = project.content
                    const CardChild = () => (
                        <>
                            <div
                                className="w-full text-center justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}

                            </div>
                            <MDXWrapper components={{ Badge }}>
                                <div className="line-clamp-3 md:line-clamp-4"><Content /></div>
                            </MDXWrapper>
                        </>
                    )
                    return <Card clickable modalContent={<CardChild />} key={project.metadata.title}>
                        <CardChild />
                    </Card>
                })}
            </div>


        </section>
    )
}