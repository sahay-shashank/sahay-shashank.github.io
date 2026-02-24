import { MDXWrapper } from "@/components/mdxWrapper"
import { loadProject } from "@/controllers/projects/loadProject"
import { loadProjectSection } from "@/controllers/projects/loadSection"
import { ExperimentalProjects } from "@/sections/Projects/ExperimentalProjects"
import { FeaturedProjects } from "@/sections/Projects/FeaturedProjects"
import { OpenSourceProjects } from "@/sections/Projects/OpenSourceProjects"
import type { ProjectItem } from "@/types/projects"
import type { SectionContent } from "@/types/section"
import { useState, useEffect } from "react"

function Projects() {
    const [projects, setProjects] = useState<ProjectItem[]>([])
    const [projectSectionContent, setProjectSectionContent] = useState<SectionContent | null>(null)
    useEffect(() => {
        loadProject().then(setProjects)
        loadProjectSection().then(setProjectSectionContent)
    }, [])
    if (!projectSectionContent) return null
    if (projects.length == 0) return null
    const featuredProjects = projects.filter((project) => project.metadata.featured)
    const experimentalProjects = projects.filter((project) => project.metadata.experimental)
    const normalProjects = projects.filter((projects) => !(projects.metadata.featured || projects.metadata.experimental))

    const ProjectSectionContent = projectSectionContent.content

    return (
        <section id="projects" className="px-6 py-20 border-t border-gray-200">
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold">
                    {projectSectionContent.metadata.title}
                </h1>
                <p className="text-(--subtext) mt-2 italic">
                    {projectSectionContent.metadata.subtitle}
                </p>
            </div>
            <div>
                <MDXWrapper>
                    <ProjectSectionContent />
                </MDXWrapper>
            </div>
            <div className="grid gap-6">
                {featuredProjects.length > 0 && <FeaturedProjects projects={featuredProjects} />}
                {normalProjects.length > 0 && <OpenSourceProjects projects={normalProjects} />}
                {experimentalProjects.length > 0 && <ExperimentalProjects projects={experimentalProjects} />}
            </div>
        </section>
    )
}

export default Projects