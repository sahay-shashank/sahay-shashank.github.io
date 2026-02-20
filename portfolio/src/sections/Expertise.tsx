import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CodeBlock } from "@/components/codeBlock"
import { loadExpertise } from "@/controllers/expertise/loadExpertise"
import type { ExpertiseItem } from "@/types/expertise"
import { MDXWrapper } from "@/components/mdxWrapper"
import type { SectionContent } from "@/types/section"
import { loadExpertiseSection } from "@/controllers/expertise/loadSection"

export default function Expertise() {
  const [active, setActive] = useState<number | null>(1)
  const [principles, setPrinciples] = useState<ExpertiseItem[]>([])
  const [expertiseSectionContent, setExpertiseSectionContent] = useState<SectionContent | null>(null)

  useEffect(() => {
    loadExpertise().then(setPrinciples)
    loadExpertiseSection().then(setExpertiseSectionContent)
  }, [])

  if (!expertiseSectionContent) return null;
  
  const ExpertiseSectionContent = expertiseSectionContent.content
  return (
    <section id="Expertise" className="mx-auto py-24 px-6">
      {/* Title Block */}
      <div className="mb-6 space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          {expertiseSectionContent.metadata.title}
        </h1>

        <p className="text-gray-500 mt-2 max-w-xl">
          {expertiseSectionContent.metadata.subtitle}
        </p>
      </div>


      <div>
        <MDXWrapper components={{ "code": CodeBlock }}>
          <ExpertiseSectionContent />
        </MDXWrapper>
      </div>

      <div className="space-y-6">
        {principles.map((item, index) => {
          const isActive = active === index

          const Content = item.content
          return (
            <div
              key={index}
              className="border-b border-zinc-800 pb-4 cursor-pointer"
              onClick={() =>
                setActive(isActive ? null : index)
              }
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-medium tracking-tight">
                  {item.metadata.title}
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
                    <MDXWrapper components={{ "code": CodeBlock }}>
                      <Content />
                    </MDXWrapper>
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
