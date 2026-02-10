export interface HobbyMetadata {
    title: string
    icon?: string
}

export interface HobbyItem {
    metadata: HobbyMetadata
    content: React.ComponentType
}
