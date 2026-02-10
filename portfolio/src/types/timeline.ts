export interface TimelineMetadata {
    company: string;
    role: string;
    start: string;
    end?: string;
    version?: string;
}

export interface TimelineItem {
    metadata: TimelineMetadata;
    content: React.ComponentType;
}