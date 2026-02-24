import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import type { ProjectItem } from "@/types/projects";
import { Badge } from "@sahay-shashank/ui-library";

interface experimentalProjectsProps {
    projects: ProjectItem[]
}

export function ExperimentalProjects(props: experimentalProjectsProps) {
    return (
        <section id="experimental-projects">
            <h3 className="text-2xl font-semibold">
                Experimental Projects
            </h3>
            <p className="text-(--subtext) mt-2">
                Trying to learn new stuffs
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-6">

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