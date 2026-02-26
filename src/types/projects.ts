export interface ProjectMetadata {
    title: string,
    badges?: BadgeSpec[],
    subtitle?: string,
    links?: Links,
    featured?: boolean,
    experimental?: boolean
}

export interface ProjectItem {
    metadata: ProjectMetadata
    content: React.ComponentType
}

export interface BadgeSpec {
    label: string,
    color?: string
}

export interface Links {
    github?: string,
    website?: string,
}