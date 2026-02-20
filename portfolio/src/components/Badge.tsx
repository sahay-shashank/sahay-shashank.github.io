import { motion } from "framer-motion"

interface BadgeProps {
  label: string
  logo?: React.ReactNode
  color?: string // background color
  textColor?: string
  className?: string
}

export function Badge({
  label,
  logo,
  color = "#1f2937", // default dark gray
  textColor = "#ffffff",
  className = "",
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-md ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {logo && (
        <span className="flex items-center justify-center">
          {logo}
        </span>
      )}
      {label}
    </motion.span>
  )
}