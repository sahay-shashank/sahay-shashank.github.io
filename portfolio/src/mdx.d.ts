import mdxComponents from "@/components/mdxWrapper/components"
declare module "*.mdx" {
    import { ComponentType } from "react";
    const MDXComponent: ComponentType<mdxComponents>;
    export default MDXComponent;
}

declare module "*.svg" {
    import { React } from "react";
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
}
