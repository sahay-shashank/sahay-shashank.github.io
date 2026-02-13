import React, { createContext, useContext, useEffect, useRef, useState } from "react"

interface CardContextType {
    expanded: boolean
}

const CardContext = createContext<CardContextType | null>(null)

interface CardProps {
    children: React.ReactNode
    className?: string

    // Expandable features
    expandable?: boolean
    defaultExpanded?: boolean
    expanded?: boolean
    onToggle?: (expanded: boolean) => void

    title?: React.ReactNode
}

export function Card({
    children,
    className = "",
    expandable = false,
    defaultExpanded = false,
    expanded: controlledExpanded,
    onToggle,
    title
}: CardProps) {

    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded)

    const isControlled = controlledExpanded !== undefined
    const expanded = isControlled ? controlledExpanded : internalExpanded

    function toggle() {
        if (!expandable) return

        if (!isControlled) {
            setInternalExpanded(!expanded)
        }

        onToggle?.(!expanded)
    }

    return (
        <CardContext.Provider value={{ expanded }}>
            <div
                data-expanded={expanded}
                className={`
        border rounded-xl p-4 transition-all
        ${className}
    `}
            >


                {/* Header */}
                {title && (
                    <button
                        onClick={toggle}
                        aria-expanded={expanded}
                        className="w-full text-left flex justify-between items-center font-semibold"
                    >
                        <span>{title}</span>

                        {expandable && (
                            <span className="text-sm opacity-70">
                                {expanded ? "−" : "+"}
                            </span>
                        )}
                    </button>
                )}

                {/* Body */}
                <div className="mt-3">
                    {children}
                </div>

            </div>
        </CardContext.Provider>
    )
}

interface CardExpandedProps {
    children: React.ReactNode
}

interface CardExpandedProps {
    children: React.ReactNode
}

export function CardExpanded({ children }: CardExpandedProps) {
    const ctx = useContext(CardContext)

    if (!ctx) {
        throw new Error("Card.Expanded must be used inside Card")
    }

    const ref = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<string>("0px")

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (ctx.expanded) {
            // Set explicit height first
            setHeight(`${el.scrollHeight}px`)

            // After animation completes, switch to auto
            const timeout = setTimeout(() => {
                setHeight("auto")
            }, 300)

            return () => clearTimeout(timeout)
        } else {
            // If collapsing, measure current height first
            if (height === "auto") {
                setHeight(`${el.scrollHeight}px`)

                // Next frame collapse
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setHeight("0px")
                    })
                })
            } else {
                setHeight("0px")
            }
        }
    }, [ctx.expanded])

    return (
        <div
            style={{ height }}
            className={`overflow-hidden transition-all duration-300  ${ctx.expanded ? "opacity-100" : "opacity-0"}`}
        >
            <div ref={ref}>
                {children}
            </div>
        </div>
    )
}

Card.Expanded = CardExpanded

export default Card as typeof Card & {
    Expanded: typeof CardExpanded
}
