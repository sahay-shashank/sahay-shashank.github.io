import type React from "react"

type TimelineEntryProps = {
    title: string,
    subtitle?: string,
    children: React.ReactElement,
    titleClassName?: string,
    subtitleClassName?: string,
    pointer?: React.ReactElement,
    className?: string
}

function TimelineEntry(props: TimelineEntryProps) {
    // const Content = entry.content
    return (
        <div className={props.className}>
            {props.pointer}

            <h3 className={props.titleClassName}>
                {props.title}
            </h3>

            <p className={props.subtitleClassName}>
                {props.subtitle}
            </p>

            {props.children}
        </div>
    )
}

export default TimelineEntry;