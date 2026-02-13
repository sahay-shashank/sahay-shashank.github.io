import type { MDXModule } from "@/components/mdxWrapper"
import type { HobbyItem, HobbyMetadata } from "@/types/hobby"

export async function loadHobby(): Promise<HobbyItem[]> {
    const modules = import.meta.glob<MDXModule<HobbyMetadata>>(
        "@/content/about/*.hobby.mdx"
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
