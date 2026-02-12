import type React from "react"

interface CardProps {
    children: React.ReactNode,
    className?: string
}

function Card(props: CardProps) {
    // const Content = item.content

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Card