import{u as s,j as n}from"./index-C6MrNxEY.js";const r={title:"Personal Knowledge Manager",subtitle:"A program for managing personal logs and notes",badges:[{label:"Go"},{label:"Linux"},{label:"Taskfile"},{label:"GitHub Actions"},{label:"Containers"}],links:{github:"https://github.com/sahay-shashank/personal-knowledge-manager"},featured:!0};function l(i){const e={em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"pkm"}),` is a terminal-native personal knowledge manager inspired by the Zettelkasten method.
It enables the creation of small, interconnected notes stored securely on disk — fully encrypted, Git-friendly, and entirely under your control.`]}),`
`,n.jsxs(e.p,{children:["Think: ",n.jsx(e.em,{children:"Obsidian-style linking + Git-native storage + strong cryptography — without leaving the terminal."})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Why I Built It"}),`
`,n.jsx(e.p,{children:"I wanted a knowledge system that felt:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Local-first"})," — no cloud dependency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Secure by design"})," — encryption as a default, not an add-on"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composable"})," — small notes forming larger insight"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Developer-native"})," — version control, filesystem clarity, CLI workflow"]}),`
`]}),`
`,n.jsx(e.p,{children:`Most tools optimize for UI.
pkm optimizes for ownership, speed, and control.`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Core Capabilities"}),`
`,n.jsx(e.h3,{children:"Knowledge Engine"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Atomic note creation, editing, deletion"}),`
`,n.jsx(e.li,{children:"Bi-directional linking between notes"}),`
`,n.jsx(e.li,{children:"Tagging & categorization"}),`
`,n.jsx(e.li,{children:"Full-text keyword search"}),`
`,n.jsx(e.li,{children:"Tag-based filtering"}),`
`,n.jsx(e.li,{children:"Encrypted indexing for fast retrieval"}),`
`]}),`
`,n.jsx(e.h3,{children:"Security Architecture"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"AES-256-GCM authenticated encryption"}),`
`,n.jsx(e.li,{children:"PBKDF2 key derivation (100k iterations)"}),`
`,n.jsx(e.li,{children:"Per-user encryption keys"}),`
`,n.jsx(e.li,{children:"Random salts & nonces"}),`
`,n.jsx(e.li,{children:"Zero plaintext written to disk"}),`
`]}),`
`,n.jsx(e.p,{children:"Even in a public Git repository, the content remains unreadable."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"System Design"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Multi-user support with isolated encrypted stores"}),`
`,n.jsx(e.li,{children:"Git-safe encrypted note files"}),`
`,n.jsx(e.li,{children:"Clean filesystem hierarchy"}),`
`,n.jsx(e.li,{children:"Designed for future distributed sync"}),`
`]}),`
`,n.jsx(e.p,{children:"Planned:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Multi-machine synchronization"}),`
`,n.jsx(e.li,{children:"Terminal UI (TUI)"}),`
`,n.jsx(e.li,{children:"Graph visualization"}),`
`,n.jsx(e.li,{children:"Plugin system"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Philosophy"}),`
`,n.jsx(e.p,{children:"pkm is built on a few core beliefs:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Small notes create better thinking than long documents"}),`
`,n.jsx(e.li,{children:"Links generate insight"}),`
`,n.jsx(e.li,{children:"Local-first beats cloud-first"}),`
`,n.jsx(e.li,{children:"If it’s your knowledge, you should own it"}),`
`]})]})}function o(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{o as default,r as metadata};
