import React, { useState } from "react"

/* ===============================
   Types
================================= */

type Node = {
    id: string
    label: string
}

type Arc = {
    id: string
    startAngle: number
    endAngle: number
    color: string
    nodes: Node[]
}

/* ===============================
   Constants
================================= */

const SIZE = 700
const CENTER = SIZE / 2
const RADIUS = 220
const STROKE = 70
const NODE_DISTANCE = 140

/* ===============================
   Helpers
================================= */

function polarToCartesian(
    cx: number,
    cy: number,
    radius: number,
    angle: number
) {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
        x: cx + radius * Math.cos(rad),
        y: cy + radius * Math.sin(rad),
    }
}

function describeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
) {
    const start = polarToCartesian(x, y, radius, endAngle)
    const end = polarToCartesian(x, y, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

    return [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
    ].join(" ")
}

/* ===============================
   Data
================================= */

const arcs: Arc[] = [
    {
        id: "frontend",
        startAngle: 0,
        endAngle: 120,
        color: "#22ff00",
        nodes: [
            { id: "react", label: "React" },
            { id: "next", label: "Next.js" },
            { id: "ts", label: "TypeScript" },
        ],
    },
    {
        id: "backend",
        startAngle: 120,
        endAngle: 240,
        color: "#c026d3",
        nodes: [
            { id: "node", label: "Node" },
            { id: "express", label: "Express" },
            { id: "db", label: "Postgres" },
        ],
    },
    {
        id: "design",
        startAngle: 240,
        endAngle: 360,
        color: "#6366f1",
        nodes: [
            { id: "figma", label: "Figma" },
            { id: "motion", label: "Framer" },
            { id: "ux", label: "UX" },
        ],
    },
]

/* ===============================
   Component
================================= */

export default function RadialSkillTree() {
    const [active, setActive] = useState<string | null>(null)

    return (
        <div
            className="h-screen w-screen  flex items-center justify-center"
        >
            <svg className="h-screen w-screen flex items-center justify-center">
                {/* Center */}
                <circle cx={CENTER} cy={CENTER} r={50} fill="red" />

                {arcs.map((arc) => {
                    const isActive = active === arc.id
                    const isDimmed = active && active !== arc.id

                    return (
                        <g
                            key={arc.id}
                            onMouseEnter={() => setActive(arc.id)}
                            onMouseLeave={() => setActive(null)}
                            style={{
                                transition: "all 0.4s ease",
                                transformOrigin: `${CENTER}px ${CENTER}px`,
                                transform: isActive
                                    ? "scale(1.1)"
                                    : isDimmed
                                        ? "scale(0.9)"
                                        : "scale(1)",
                                opacity: isDimmed ? 0.25 : 1,
                                filter: isDimmed ? "blur(2px)" : "none",
                                cursor: "pointer",
                            }}
                        >
                            {/* Arc */}
                            <path
                                d={describeArc(
                                    CENTER,
                                    CENTER,
                                    RADIUS,
                                    arc.startAngle,
                                    arc.endAngle
                                )}
                                stroke={arc.color}
                                strokeWidth={STROKE}
                                fill="none"
                                strokeLinecap="round"
                            />

                            {/* Nodes */}
                            {arc.nodes.map((node, i) => {
                                const angleStep =
                                    (arc.endAngle - arc.startAngle) /
                                    (arc.nodes.length + 1)

                                const angle =
                                    arc.startAngle + angleStep * (i + 1)

                                // Anchor at arc outer edge
                                const anchor = polarToCartesian(
                                    CENTER,
                                    CENTER,
                                    RADIUS + STROKE / 2,
                                    angle
                                )

                                // Node position further outward
                                const nodePos = polarToCartesian(
                                    CENTER,
                                    CENTER,
                                    RADIUS + STROKE / 2 + NODE_DISTANCE,
                                    angle
                                )

                                return (
                                    <g key={node.id}>
                                        {/* Line */}
                                        <line
                                            x1={anchor.x}
                                            y1={anchor.y}
                                            x2={nodePos.x}
                                            y2={nodePos.y}
                                            stroke="red"
                                            strokeWidth={2}
                                            style={{
                                                opacity: isDimmed ? 0.2 : 1,
                                            }}
                                        />

                                        {/* Node */}
                                        <circle
                                            cx={nodePos.x}
                                            cy={nodePos.y}
                                            r={20}
                                            fill="red"
                                            style={{
                                                transition: "all 0.3s ease",
                                                opacity: isDimmed ? 0.2 : 1,
                                                filter: isDimmed
                                                    ? "blur(2px)"
                                                    : "none",
                                            }}
                                        />
                                    </g>
                                )
                            })}
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}
