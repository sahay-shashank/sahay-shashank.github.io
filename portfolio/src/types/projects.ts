export interface ProjectMetadata {
    title: string,
    subtitle?: string,
    featured?: boolean,
    experimental?:boolean
}

export interface ProjectItem {
    metadata: ProjectMetadata
    content: React.ComponentType
}
