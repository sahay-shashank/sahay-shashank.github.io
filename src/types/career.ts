export interface CareerTimelineMetadata {
    company: string;
    role: string;
    start: string;
    end?: string;
    version?: string;
}

export interface CareerTimelineItem {
    metadata: CareerTimelineMetadata;
    content: React.ComponentType;
}