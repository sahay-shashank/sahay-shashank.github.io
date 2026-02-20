import type { MDXModule } from "@/components/mdxWrapper";
import type { CareerTimelineMetadata, CareerTimelineItem } from "@/types/career";


export async function loadTimeline(): Promise<CareerTimelineItem[]> {
    const modules = import.meta.glob<MDXModule<CareerTimelineMetadata>>(
        "@/content/career/*.mdx"
    );

    const items = await Promise.all(
        Object.values(modules).map(async (loader) => {
            const mod = await loader();

            return {
                metadata: mod.metadata,
                content: mod.default
            };
        })
    );

    return items.sort(
        (a, b) => Number(b.metadata.start) - Number(a.metadata.start)
    );
}
