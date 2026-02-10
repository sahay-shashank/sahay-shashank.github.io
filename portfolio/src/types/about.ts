export interface AboutMetadata {
    title: string
    version?: string
}

export interface AboutContent {
    metadata: AboutMetadata;
    content: React.ComponentType;
}