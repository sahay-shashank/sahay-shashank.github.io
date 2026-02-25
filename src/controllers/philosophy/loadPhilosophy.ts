import type { MDXModule } from "@/components/mdxWrapper"
import type { PhilosophyItem, PhilosophyMetadata } from "@/types/philosophy"

export async function loadPhilosophy(): Promise<PhilosophyItem[]> {
    const modules = import.meta.glob<MDXModule<PhilosophyMetadata>>(
        "@/content/philosophy/*.mdx"
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
