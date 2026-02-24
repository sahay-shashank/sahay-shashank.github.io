
// AnimatedThemeIcon.tsx
import { motion, AnimatePresence } from "framer-motion";
import type { Theme } from "@/context/theme";
import { Moon, Sun } from "lucide-react";


const iconVariants = {
    initial: {
        opacity: 0,
        rotate: -90,
        scale: 0.6,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
    },
    exit: {
        opacity: 0,
        rotate: 90,
        scale: 0.6,
    },
};

export const ThemeIcon = ({ theme }: { theme: Theme }) => {
    return (
        <span style={{ width: 24, height: 24, display: "flex" }}>
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.span
                        key="sun"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Sun size={'24px'} />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Moon size={'24px'} />
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
};