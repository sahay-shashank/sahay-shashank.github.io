import { motion } from "framer-motion"

interface GlitchTextProps {
    text: string
    className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
    const glitchText: string = text
    return (
        <div className={`relative font-mono tracking-wider select-none ${className}`}>
            {glitchText.split("").map((char, i) => (
                <motion.span
                    key={`${i}`} // re-triggers animation
                    className="relative inline-block"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        x: [0, -2, 2, -1, 1, 0],
                        y: [0, 1, -1, 0],
                    }}
                    transition={{
                        duration: 0.35,
                        delay: i * 0.05,
                        ease: "easeOut",
                    }}
                >
                    {/* Base */}
                    <span className="relative z-10">{char}</span>

                    {/* Red Channel */}
                    <span className="absolute inset-0 text-red-500 opacity-60 translate-x-[-2px]">
                        {char}
                    </span>

                    {/* Cyan Channel */}
                    <span className="absolute inset-0 text-cyan-400 opacity-60 translate-x-[2px]">
                        {char}
                    </span>
                </motion.span>
            ))}
        </div>
    )
}