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
        <section id="experimental-projects">
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
                    const CardChild = () => (
                        <>
                            <div
                                className="w-full text-left flex justify-between items-center font-semibold"
                            >
                                <span>{project.metadata.title}</span>
                            </div>
                            {project.metadata.subtitle && (<p>{project.metadata.subtitle}</p>)}
                            <MDXWrapper>
                                <Content />
                            </MDXWrapper>
                        </>
                    )
                    return <Card key={project.metadata.title}>
                        <CardChild />
                    </Card>
                })}
            </div>

        </section>
    )
}