import { AnimatePresence, motion } from "framer-motion"
import { SquareX } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
    open: boolean
    children: React.ReactNode
    onClose: () => void
}

function Modal({ open, children, onClose }: ModalProps) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])
    if (typeof window === "undefined") return null

    return createPortal(
        <AnimatePresence>
            {open && (<motion.div
                className="text-white fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <SquareX />
                </button>
                <motion.div
                    className="bg-zinc-900 border rounded-xl p-6 max-w-[95vw] w-full max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                >

                    {children}
                </motion.div>
            </motion.div>)}
        </AnimatePresence>,
        document.body
    )
}

export default Modal