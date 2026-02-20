export interface SectionMetadata {
    title: string
    subtitle?: string
    version?: string
}

export interface SectionContent {
    metadata: SectionMetadata;
    content: React.ComponentType;
}