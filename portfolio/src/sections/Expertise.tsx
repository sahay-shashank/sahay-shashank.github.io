// export default function Expertise() {
//   return (
//     <section id="projects" className="px-6 py-20 border-t border-gray-200">
//       <h1 className="text-3xl font-bold text-center">
//         Projects
//       </h1>
//       <CodeBlock
//         className="m-6"
//         language="tsx"
//         code={`function Button() {
//   return <button>Hello</button>
// }`}
//       />
//     </section>
//   )
// }


import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Principle {
  id: number
  title: string
  description: string
}

const principles: Principle[] = [
  {
    id: 1,
    title: "Architecture First",
    description:
      "I define boundaries, data flow, and responsibilities before writing features. Structure reduces future friction."
  },
  {
    id: 2,
    title: "Performance Is a Feature",
    description:
      "Measured, not assumed. I optimize where data proves it matters."
  },
  {
    id: 3,
    title: "Automate the Boring",
    description:
      "Linting, formatting, testing, CI — repetition should be handled by systems, not people."
  },
  {
    id: 4,
    title: "Clarity Over Cleverness",
    description:
      "Readable code scales better than impressive code. Maintainability is the real multiplier."
  }
]

export default function HowIBuild() {
  const [active, setActive] = useState<number | null>(1)

  return (
    <section className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-10">
        // How I Build
      </h2>

      <div className="space-y-6">
        {principles.map((item) => {
          const isActive = active === item.id

          return (
            <div
              key={item.id}
              className="border-b border-zinc-800 pb-4 cursor-pointer"
              onClick={() =>
                setActive(isActive ? null : item.id)
              }
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 font-mono text-sm">
                  {String(item.id).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-medium tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Animated Description */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-zinc-400 mt-3 pl-10 text-sm leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
