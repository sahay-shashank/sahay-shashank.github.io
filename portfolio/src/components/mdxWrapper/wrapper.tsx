import { MDXProvider } from "@mdx-js/react"
import type { ComponentType } from "react";
import { defaultMdxComponents } from "./components";

// Suggested - more specific
export interface MDXWrapperProps {
    children: React.ReactNode;
    components?: Partial<Record<'h1' | 'h2' | 'p' | 'ul' | 'li' | string, ComponentType>>;
}

export function MDXWrapper({ children, components = {} }: MDXWrapperProps) {
    // Merge custom components with defaults, allowing users to override specific components
    const mergedComponents = { ...defaultMdxComponents, ...components };

    return (
        <MDXProvider components={mergedComponents}>
            {children}
        </MDXProvider>
    )
}

export interface MDXModule<TMetadata> {
    default: ComponentType;
    metadata: TMetadata;
}