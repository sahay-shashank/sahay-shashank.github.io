export interface PhilosophyMetadata {
    title: string,
    subtitle?: string,
    version?: string
}

export interface PhilosophyItem {
    metadata: PhilosophyMetadata
    content: React.ComponentType
}
