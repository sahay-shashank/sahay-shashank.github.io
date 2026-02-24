export interface ExpertiseMetadata {
    title: string,
    subtitle?: string,
    featured?: boolean,
    experimental?: boolean
}

export interface ExpertiseItem {
    metadata: ExpertiseMetadata
    content: React.ComponentType
}
