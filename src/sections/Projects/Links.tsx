import type { ProjectItem } from "@/types/projects";
import Github_White from '@/assets/GitHub_White.svg'
import Github_Black from '@/assets/GitHub_Black.svg'
import { Globe } from "lucide-react";

export default function Links({ project, theme }: { project: ProjectItem, theme: "dark" | "light" }) {
    const links = project.metadata?.links;

    if (!links) return null;

    const items = [
        links.github && (
            <a
                key="github"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
            >
                {theme === "light" ? <img src={Github_Black} className="size-6" /> : <img src={Github_White} className="size-6" />}
            </a>
        ),
        links.website && (
            <a
                key="website"
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
            >
                <Globe className="size-6" />
            </a>
        ),
    ].filter(Boolean);

    if (items.length === 0) return null;

    return <div className="flex gap-4 mt-4">{items}</div>;
};