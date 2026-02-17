import { ExperimentalProjects } from "@/sections/Projects/ExperimentalProjects"
import { FeaturedProjects } from "@/sections/Projects/FeaturedProjects"
import { OpenSourceProjects } from "@/sections/Projects/OpenSourceProjects"

function Projects() {
    return (
        <section id="projects" className="px-6 py-20 border-t border-gray-200">
            <h1 className="text-3xl font-bold text-center">
                Projects
            </h1>
            <p className="text-gray-500 mt-2 text-center">
                Showcasing projects
            </p>
            <div className="grid gap-6">
                <FeaturedProjects />
                <OpenSourceProjects />
                <ExperimentalProjects />
            </div>
        </section>
    )
}

export default Projects