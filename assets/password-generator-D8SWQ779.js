import{u as i,j as e}from"./index-_KD7vnfN.js";const a={title:"Password Generator",subtitle:"A random password generator",badges:[{label:"Go"},{label:"Containers"}],links:{github:"https://github.com/sahay-shashank/password-generator-golang"}};function s(r){const n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["A simple yet practical utility built in ",e.jsx(n.strong,{children:"Go"}),", designed to generate secure passwords through either a command-line interface or a minimal web endpoint."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Why I Built It"}),`
`,e.jsx(n.p,{children:"I wanted a compact utility that:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Works directly from the terminal"}),`
`,e.jsx(n.li,{children:"Can also expose functionality via HTTP"}),`
`,e.jsx(n.li,{children:"Has minimal dependencies"}),`
`,e.jsx(n.li,{children:"Demonstrates clean Go structure"}),`
`,e.jsx(n.li,{children:"Prioritizes predictable behavior"}),`
`]}),`
`,e.jsx(n.p,{children:"One binary. Two interfaces. Same core logic."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Character Set"}),`
`,e.jsx(n.p,{children:"Passwords are generated using:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789
!@#$%
`})}),`
`,e.jsx(n.p,{children:"This ensures a mix of lowercase, uppercase, numeric, and special characters."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Philosophy"}),`
`,e.jsx(n.p,{children:"The system is intentionally simple:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single responsibility core generator"}),`
`,e.jsx(n.li,{children:"Shared logic between CLI and Web modes"}),`
`,e.jsx(n.li,{children:"Clear separation of parsing and generation"}),`
`,e.jsx(n.li,{children:"No unnecessary abstraction"}),`
`]})]})}function l(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{l as default,a as metadata};
