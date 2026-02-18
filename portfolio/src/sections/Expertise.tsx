import RadialSkillTree from "@/components/radialSkillTree"
// import { useMemo } from "react"

/* =============================
   Types
============================= */

interface Skill {
  id: string
  name: string
  icon: string
  level: number
  domain: string
  featured?: boolean
  parent?: string
}

/* =============================
   Skill Data
   (Replace icons with your paths)
============================= */

// const skills: Skill[] = [
//   // Root
//   {
//     id: "me",
//     name: "Me",
//     icon: "/logos/profile.svg",
//     level: 4,
//     domain: "root",
//     featured: true,
//   },

//   // Featured Categories
//   {
//     id: "frontend",
//     name: "Frontend",
//     icon: "/logos/frontend.svg",
//     level: 4,
//     domain: "category",
//     featured: true,
//     parent: "me",
//   },
//   {
//     id: "tools",
//     name: "Tools",
//     icon: "/logos/tools.svg",
//     level: 3,
//     domain: "category",
//     featured: true,
//     parent: "me",
//   },

//   // Featured Skills
//   {
//     id: "react",
//     name: "React",
//     icon: "/logos/react.svg",
//     level: 4,
//     domain: "Frontend",
//     featured: true,
//     parent: "frontend",
//   },
//   {
//     id: "typescript",
//     name: "TypeScript",
//     icon: "typescript",
//     level: 4,
//     domain: "Frontend",
//     featured: true,
//     parent: "frontend",
//   },
//   {
//     id: "tailwind",
//     name: "Tailwind",
//     icon: "/logos/tailwind.svg",
//     level: 3,
//     domain: "Frontend",
//     featured: true,
//     parent: "frontend"
//   },
//   {
//     id: "git",
//     name: "Git",
//     icon: "/logos/git.svg",
//     level: 3,
//     domain: "Tools",
//     featured: true,
//     parent: "tools"
//   },
//   {
//     id: "vite",
//     name: "Vite",
//     icon: "/logos/vite.svg",
//     level: 3,
//     domain: "Tools",
//   },
// ]

/* =============================
   Utility: Radial Position
============================= */

// function getRadialPosition(index: number, total: number, radius: number) {
//   const angle = (index / total) * 2 * Math.PI

//   return {
//     x: Math.cos(angle) * radius,
//     y: Math.sin(angle) * radius,
//   }
// }

/* =============================
   Heat Styles
============================= */

const heatStyles = [
  "bg-gray-100 text-gray-500",
  "bg-blue-100 text-blue-600",
  "bg-blue-200 text-blue-700",
  "bg-blue-300 text-blue-800",
  "bg-blue-500 text-white",
]

/* =============================
   Skill Node (Tree)
============================= */

// function SkillNode({ skill }: { skill: Skill }) {
//   return (
//     <div className="group relative flex items-center justify-center">
//       <div
//         className="
//         w-14 h-14 rounded-full bg-white shadow
//         flex items-center justify-center
//         transition-transform duration-300
//         group-hover:scale-125
//       "
//       >
//         <img src={skill.icon} alt={skill.name} className="w-7 h-7" />
//       </div>

//       <span
//         className="
//         absolute top-full mt-2 text-xs whitespace-nowrap
//         opacity-0 group-hover:opacity-100 transition
//       "
//       >
//         {skill.name}
//       </span>
//     </div>
//   )
// }

/* =============================
   Skill Chip (Heat Map)
============================= */

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div
      className={`
        px-3 py-1 rounded-lg text-sm font-medium
        ${heatStyles[skill.level]}
        transition hover:scale-105
      `}
    >
      {skill.name}
    </div>
  )
}

/* =============================
   Expertise Section
============================= */

export default function Expertise() {
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Expertise
      </h1>
      <div>
        <RadialSkillTree />
      </div>
    </div>
  )
}

// export default function Expertise() {
//   /* ---------- Tree Logic ---------- */

//   const root = skills.find((s) => s.id === "me")!

//   const level1 = skills.filter(
//     (s) => s.featured && s.parent === root.id
//   )

//   const level2 = skills.filter(
//     (s) => s.featured && level1.some((p) => p.id === s.parent)
//   )

//   /* ---------- Domain Grouping ---------- */

//   const domainGroups = useMemo(() => {
//     const map: Record<string, Skill[]> = {}

//     skills.forEach((skill) => {
//       if (skill.domain === "root" || skill.domain === "category") return

//       if (!map[skill.domain]) map[skill.domain] = []

//       map[skill.domain].push(skill)
//     })

//     return map
//   }, [])

//   return (
//     <section className="px-6 py-24 max-w-6xl mx-auto space-y-20">
//       {/* =============================
//           Featured Skill Tree
//       ============================= */}

//       <div className="space-y-8">
//         <h2 className="text-3xl font-semibold text-center">
//           Featured Expertise
//         </h2>

//         <div className="relative w-[420px] h-[420px] mx-auto flex items-center justify-center">
//           {/* Root */}
//           <SkillNode skill={root} />

//           {/* Level 1 */}
//           {level1.map((skill, i) => {
//             const pos = getRadialPosition(i, level1.length, 120)

//             return (
//               <div
//                 key={skill.id}
//                 className="absolute"
//                 style={{
//                   transform: `translate(${pos.x}px, ${pos.y}px)`,
//                 }}
//               >
//                 <SkillNode skill={skill} />
//               </div>
//             )
//           })}

//           {/* Level 2 */}
//           {level2.map((skill, i) => {
//             const pos = getRadialPosition(i, level2.length, 200)

//             return (
//               <div
//                 key={skill.id}
//                 className="absolute"
//                 style={{
//                   transform: `translate(${pos.x}px, ${pos.y}px)`,
//                 }}
//               >
//                 <SkillNode skill={skill} />
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* =============================
//           Domain Heat Map
//       ============================= */}

//       <div className="space-y-10">
//         <h2 className="text-3xl font-semibold text-center">
//           Skill Domains
//         </h2>

//         <div className="space-y-8">
//           {Object.entries(domainGroups).map(([domain, skills]) => (
//             <div key={domain} className="space-y-3">
//               <h3 className="text-lg font-semibold">{domain}</h3>

//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill) => (
//                   <SkillChip key={skill.id} skill={skill} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

/* =============================
   Expertise Section
============================= */

// export default function Expertise() {
//   const root = skills.find((s) => s.id === "me")!

//   const level1 = skills.filter(
//     (s) => s.featured && s.parent === root.id
//   )

//   const level2 = skills.filter(
//     (s) =>
//       s.featured &&
//       level1.some((parent) => parent.id === s.parent)
//   )

//   const nodePositions: Record<string, { x: number; y: number }> = {}

//   // Root at center
//   nodePositions[root.id] = { x: 0, y: 0 }

//   // Level 1 around root
//   level1.forEach((skill, i) => {
//     const pos = getRadialPosition(i, level1.length, 120)
//     nodePositions[skill.id] = pos
//   })

//   // Level 2 around their parent
//   level1.forEach((parent) => {
//     const children = level2.filter((s) => s.parent === parent.id)

//     children.forEach((child, i) => {
//       const parentPos = nodePositions[parent.id]
//       const local = getRadialPosition(i, children.length, 80)

//       nodePositions[child.id] = {
//         x: parentPos.x + local.x,
//         y: parentPos.y + local.y,
//       }
//     })
//   })

//   return (
//     <section className="px-6 py-24 max-w-6xl mx-auto space-y-20">
//       <div className="space-y-8">
//         <h2 className="text-3xl font-semibold text-center">
//           Featured Expertise
//         </h2>

//         <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">

//           {/* SVG Edges */}
//           <svg
//             className="absolute w-full h-full pointer-events-none"
//             viewBox="-250 -250 500 500"
//           >
//             {/* Root → Level 1 */}
//             {level1.map((skill) => (
//               <line
//                 key={`${root.id}-${skill.id}`}
//                 x1={0}
//                 y1={0}
//                 x2={nodePositions[skill.id].x}
//                 y2={nodePositions[skill.id].y}
//                 stroke="#CBD5E1"
//                 strokeWidth="2"
//               />
//             ))}

//             {/* Level 1 → Level 2 */}
//             {level2.map((skill) => {
//               const parent = nodePositions[skill.parent!]
//               const child = nodePositions[skill.id]

//               return (
//                 <line
//                   key={`${skill.parent}-${skill.id}`}
//                   x1={parent.x}
//                   y1={parent.y}
//                   x2={child.x}
//                   y2={child.y}
//                   stroke="#E2E8F0"
//                   strokeWidth="1.5"
//                 />
//               )
//             })}
//           </svg>

//           {/* Render Nodes */}
//           {Object.entries(nodePositions).map(([id, pos]) => {
//             const skill = skills.find((s) => s.id === id)!
//             return (
//               <div
//                 key={id}
//                 className="absolute"
//                 style={{
//                   transform: `translate(${pos.x}px, ${pos.y}px)`,
//                 }}
//               >
//                 <SkillNode skill={skill} />
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

