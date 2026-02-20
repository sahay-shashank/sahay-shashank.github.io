import type { MDXModule } from "@/components/mdxWrapper";
import type { SectionContent, SectionMetadata } from "@/types/section";

export async function loadCareerSection(): Promise<SectionContent> {
    const modules = import.meta.glob<MDXModule<SectionMetadata>>(
        "@/content/sections/career.mdx"
    );

    if (Object.keys(modules).length !== 1) {
        throw new Error("Multiple career preview files found");
    }

    const loader = Object.values(modules)[0];

    const mod = await loader();

    return {
        metadata: mod.metadata,
        content: mod.default
    };
}
