import { loadProject } from "@/controllers/projects/loadProject"
import { ExperimentalProjects } from "@/sections/Projects/ExperimentalProjects"
import { FeaturedProjects } from "@/sections/Projects/FeaturedProjects"
import { OpenSourceProjects } from "@/sections/Projects/OpenSourceProjects"
import type { ProjectItem } from "@/types/projects"
import { useState, useEffect } from "react"

function Projects() {
    const [projects, setProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        loadProject().then(setProjects)
    }, [])
    if (projects.length == 0) return null
    const featuredProjects = projects.filter((project) => project.metadata.featured)
    const experimentalProjects = projects.filter((project) => project.metadata.experimental)
    const normalProjects = projects.filter((projects) => !(projects.metadata.featured || projects.metadata.experimental))

    console.log(featuredProjects)
    console.log(normalProjects)
    console.log(experimentalProjects)
    if (experimentalProjects.length > 0) console.log("Fool")
    return (
        <section id="projects" className="px-6 py-20 border-t border-gray-200">
            <h1 className="text-3xl font-bold text-center">
                Projects
            </h1>
            <p className="text-gray-500 mt-2 text-center">
                Showcasing projects
            </p>
            <div className="grid gap-6">
                {featuredProjects.length > 0 && <FeaturedProjects projects={featuredProjects} />}
                {normalProjects.length > 0 && <OpenSourceProjects projects={normalProjects} />}
                {experimentalProjects.length > 0 && <ExperimentalProjects projects={experimentalProjects} />}
            </div>
        </section>
    )
}

export default Projects