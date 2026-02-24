import type { MDXModule } from "@/components/mdxWrapper"
import type { ProjectItem, ProjectMetadata } from "@/types/projects"

export async function loadProject(): Promise<ProjectItem[]> {
    const modules = import.meta.glob<MDXModule<ProjectMetadata>>(
        "@/content/projects/*.mdx"
    )

    const items = await Promise.all(
        Object.values(modules).map(async (loader) => {
            const mod = await loader()

            return {
                metadata: mod.metadata,
                content: mod.default
            }
        })
    )

    return items
}
