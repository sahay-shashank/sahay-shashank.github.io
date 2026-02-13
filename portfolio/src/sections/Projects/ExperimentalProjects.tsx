import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import { loadProject } from "@/controllers/projects/loadProject";
import type { ProjectItem } from "@/types/projects";
import { useEffect, useState } from "react";

export function ExperimentalProjects() {

    const [experimentalProjects, setExperimentalProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        loadProject().then(setExperimentalProjects)
    }, [])
    return (
        <section id="experimental-projects" className="px-6 py-6">
            <h3 className="text-2xl font-semibold">
                Experimental Projects
            </h3>
            <p className="text-gray-500 mt-2">
                Trying to learn new stuffs
            </p>
            <div className="gap-4">

                {experimentalProjects.map((project) => {
                    if (!project.metadata.experimental) return null;

                    const Content = project.content
                    const CardExpandableChild = () => (
                        <MDXWrapper>
                            <Content />
                        </MDXWrapper>
                    )
                    return <Card expandable key={project.metadata.title} title={project.metadata.title}>
                        {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}
                        <Card.Expanded>
                            <CardExpandableChild />
                        </Card.Expanded>
                    </Card>
                })}
            </div>

        </section>
    )
}