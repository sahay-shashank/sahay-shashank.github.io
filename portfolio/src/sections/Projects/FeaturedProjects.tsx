import Card from "@/components/Card";
import { useEffect, useState } from "react"
import { loadProject } from "@/controllers/projects/loadProject";
import type { ProjectItem } from "@/types/projects";
import { MDXWrapper } from "@/components/mdxWrapper";

export function FeaturedProjects() {
    const [featureProjects, setFeatureProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        loadProject().then(setFeatureProjects)
    }, [])

    return (
        <section id="featured-projects">
            <h3 className="text-2xl font-semibold">
                Featured Projects
            </h3>
            <p className="text-gray-500 mt-2">
                Steaming-Hot Projects
            </p>
            <div className="gap-4">

                {featureProjects.map((project) => {
                    if (!project.metadata.featured) return null;

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
