import type { MDXModule } from "@/components/mdxWrapper";
import type { TimelineMetadata, TimelineItem } from "@/types/timeline";


export async function loadTimeline(): Promise<TimelineItem[]> {
    const modules = import.meta.glob<MDXModule<TimelineMetadata>>(
        "@/content/about/*.timeline.mdx"
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
