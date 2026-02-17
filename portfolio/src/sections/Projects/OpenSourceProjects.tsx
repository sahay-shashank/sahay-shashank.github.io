import Card from "@/components/Card";
import { MDXWrapper } from "@/components/mdxWrapper";
import { loadProject } from "@/controllers/projects/loadProject";
import type { ProjectItem } from "@/types/projects";
import { useState, useEffect } from "react";

export function OpenSourceProjects() {
    const [featureProjects, setFeatureProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        loadProject().then(setFeatureProjects)
    }, [])

    return (
        <section id="oss-projects">
            <h3 className="text-2xl font-semibold">
                OpenSource Projects
            </h3>
            <p className="text-gray-500 mt-2">
                Projects that love contributions
            </p>
            <div className="grid gap-6 my-6">


                {featureProjects.map((project) => {
                    if (project.metadata.featured) return null;

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