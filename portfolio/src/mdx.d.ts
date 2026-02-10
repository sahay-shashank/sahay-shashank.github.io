import mdxComponents from "@/components/mdxWrapper/components"
declare module "*.mdx" {
    import { ComponentType } from "react";
    const MDXComponent: ComponentType<mdxComponents>;
    export default MDXComponent;
}
