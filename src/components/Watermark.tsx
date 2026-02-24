
import { useScroll, useTransform, motion } from "framer-motion"

interface WatermarkProps {
    label: string
}

export default function Watermark({ label }: WatermarkProps) {
    const { scrollYProgress } = useScroll()

    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2])
    const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.2])

    return (
        <motion.h1
            style={{ scale, y, opacity }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 text-[5vw] font-black pointer-events-none z-0 select-none"
        >
            {label}
        </motion.h1>
    )
}