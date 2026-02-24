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
            <p className="text-(--subtext) mt-2 italic">
                Trying to learn new stuffs
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-6">

                {props.projects.map((project) => {
                    const Content = project.content
                    const CardChild = ({ expandable }: { expandable: boolean }) => (
                        <>
                            <div
                                className="w-full text-center justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                                {project.metadata.subtitle && (<p className="italic text-(--subtext) mt-2">{project.metadata.subtitle}</p>)}

                            </div>
                            <div className={!expandable ? `line-clamp-3 md:line-clamp-10` : ""}>
                                <MDXWrapper components={{ Badge }}>
                                    <Content />
                                </MDXWrapper>
                            </div>
                        </>
                    )
                    return <Card clickable modalContent={<CardChild expandable />} key={project.metadata.title}>
                        <CardChild expandable={false} />
                    </Card>
                })}
            </div>

        </section>
    )
}