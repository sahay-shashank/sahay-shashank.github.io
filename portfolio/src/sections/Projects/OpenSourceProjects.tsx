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
            <div className="grid gap-6">


                {featureProjects.map((project) => {
                    if (project.metadata.featured) return null;

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