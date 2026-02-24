import { AnimatePresence, motion, MotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import Modal from "@/components/Modal"

interface CardProps {
    children: React.ReactNode
    className?: string
    clickable?: boolean
    modalContent?: React.ReactNode
}

export function Card({
    children,
    className = "",
    clickable = false,
    modalContent,
}: CardProps) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        if (clickable) setOpen(true)
    }

    return (
        <>
            <div
                onClick={handleClick}
                className={`
                    border rounded-xl p-4 transition-all
                    ${clickable ? "cursor-pointer hover:shadow-lg hover:-translate-y-1" : ""}
                    ${className}
                `}
            >
                <div className="mt-3">
                    {children}
                </div>
            </div>

            <AnimatePresence>
                <Modal open={open} onClose={() => setOpen(false)}>
                    {modalContent}
                </Modal>
            </AnimatePresence>
        </>
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
        <div className={`sticky min-h-[70vh] flex items-center justify-center top-0 m-4 ${props.className}`} >
            <motion.div style={{ scale, top: `calc(${props.index * 5}vh)` }} className="relative">
                {props.children}
            </motion.div>
        </div >
    )
}

Card.Parallax = CardParallax

export default Card
