export interface ProjectMetadata {
    title: string,
    subtitle?: string,
    featured?: boolean
}

export interface ProjectItem {
    metadata: ProjectMetadata
    content: React.ComponentType
}
