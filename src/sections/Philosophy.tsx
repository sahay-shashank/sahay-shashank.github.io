import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CodeBlock } from "@/components/codeBlock"
import { loadPhilosophy } from "@/controllers/philosophy/loadPhilosophy"
import type { PhilosophyItem } from "@/types/philosophy"
import { MDXWrapper } from "@/components/mdxWrapper"
import type { SectionContent } from "@/types/section"
import { loadPhilosophySection } from "@/controllers/philosophy/loadSection"
import { ChevronDown } from "lucide-react"

export default function Philosophy() {
  const [active, setActive] = useState<number[]>([])
  const [principles, setPrinciples] = useState<PhilosophyItem[]>([])
  const [philosophySectionContent, setPhilosophySectionContent] = useState<SectionContent | null>(null)
  useEffect(() => {
    loadPhilosophy().then(setPrinciples)
    loadPhilosophySection().then(setPhilosophySectionContent)
  }, [])
  if (!philosophySectionContent) return null;

  const PhilosophySectionContent = philosophySectionContent.content
  return (
    <section id="philosophy" className="px-6 py-20 border-t border-gray-200">
      {/* Title Block */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold heading-font">
          {philosophySectionContent.metadata.title}
        </h1>

        <p className="text-(--subtext) mt-2 italic">
          {philosophySectionContent.metadata.subtitle}
        </p>
      </div>

      <div>
        <MDXWrapper>
          <PhilosophySectionContent />
        </MDXWrapper>
      </div>

      <div className="space-y-6 py-6 px-6">
        {principles.map((item, index) => {
          const isActive = active.includes(index)
          const Content = item.content

          return (
            <div
              key={index}
              className="border-b border-zinc-800 pb-4 cursor-pointer"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  setActive((prev) =>
                    prev.includes(index)
                      ? prev.filter((i) => i !== index) // close only this one
                      : [...prev, index]               // open without closing others
                  )
                }
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-medium tracking-tight code-font">
                    {item.metadata.title}
                  </h3>
                </div>

                {/* Right Side Arrow */}
                <motion.span
                  animate={{ rotateX: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-500"
                >
                  <ChevronDown />
                </motion.span>
              </div>

              {/* Animated Description */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 px-10 text-sm space-y-6 leading-relaxed overflow-hidden"
                  >
                    <MDXWrapper components={{ CodeBlock }}>
                      <Content />
                    </MDXWrapper>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
