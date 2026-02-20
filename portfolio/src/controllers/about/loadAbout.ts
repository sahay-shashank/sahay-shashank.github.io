import type { MDXModule } from "@/components/mdxWrapper";
import type { AboutContent, AboutMetadata } from "@/types/about";

export async function loadAbout(): Promise<AboutContent> {
    const modules = import.meta.glob<MDXModule<AboutMetadata>>(
        "@/content/sections/about.mdx"
    );

    if (Object.keys(modules).length !== 1) {
        throw new Error("Multiple about preview files found");
    }

    const loader = Object.values(modules)[0];

    const mod = await loader();

    return {
        metadata: mod.metadata,
        content: mod.default
    };
}
