import { ExperimentalProjects } from "@/sections/Projects/ExperimentalProjects"
import { FeaturedProjects } from "@/sections/Projects/FeaturedProjects"
import { OpenSourceProjects } from "@/sections/Projects/OpenSourceProjects"

function Projects() {
    return (
        <section id="projects" className="px-6 py-6" >
            <h1 className="text-3xl font-bold">
                Projects
            </h1>
            <p className="text-gray-500 mt-2">
                Showcasing projects
            </p>

            <FeaturedProjects />
            <OpenSourceProjects />
            <ExperimentalProjects />
        </section>
    )
}

export default Projects