import { motion, MotionValue, useTransform } from "framer-motion"

interface CardProps {
    children: React.ReactNode
    className?: string
}

export function Card({
    children,
    className = "",
}: CardProps) {

    return (
        <div
            className={`
        border rounded-xl p-4 transition-all
        ${className}
    `}
        >
            <div className="mt-3">
                {children}
            </div>
        </div>
    )
}

interface CardParallaxProps {
    children: React.ReactElement
    index: number
    targetScale: number
    className?: string
    range: number[]
    progress: MotionValue<number>
}

function CardParallax(props: CardParallaxProps) {
    const scale = useTransform(props.progress, props.range, [1, props.targetScale])
    return (
        <div className={`sticky h-dvh flex items-center justify-center top-0 ${props.className}`} >
            <motion.div style={{ scale, top: `calc(-10% + ${props.index * 25}px)` }} className="relative">
                {props.children}
            </motion.div>
        </div >
    )
}

Card.Parallax = CardParallax

export default Card
