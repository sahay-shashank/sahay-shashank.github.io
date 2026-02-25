import type { MDXModule } from "@/components/mdxWrapper";
import type { SectionContent, SectionMetadata } from "@/types/section";

export async function loadPhilosophySection(): Promise<SectionContent> {
    const modules = import.meta.glob<MDXModule<SectionMetadata>>(
        "@/content/sections/philosophy.mdx"
    );

    if (Object.keys(modules).length !== 1) {
        throw new Error("Multiple philosophy preview files found");
    }

    const loader = Object.values(modules)[0];

    const mod = await loader();

    return {
        metadata: mod.metadata,
        content: mod.default
    };
}
