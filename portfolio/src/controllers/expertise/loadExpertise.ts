import type { MDXModule } from "@/components/mdxWrapper"
import type { ExpertiseItem, ExpertiseMetadata } from "@/types/expertise"

export async function loadExpertise(): Promise<ExpertiseItem[]> {
    const modules = import.meta.glob<MDXModule<ExpertiseMetadata>>(
        "@/content/expertise/*.mdx"
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
