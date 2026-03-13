import{u as t,j as n}from"./index-C6MrNxEY.js";const l={title:"Password Generator",subtitle:"A random password generator",badges:[{label:"Go"},{label:"Containers"}],links:{github:"https://github.com/sahay-shashank/password-generator-golang"}};function s(i){const e={h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components},{CodeBlock:r}=e;return r||o("CodeBlock"),n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:["A simple yet practical utility built in ",n.jsx(e.strong,{children:"Go"}),", designed to generate secure passwords through either a command-line interface or a minimal web endpoint."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Why I Built It"}),`
`,n.jsx(e.p,{children:"I wanted a compact utility that:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Works directly from the terminal"}),`
`,n.jsx(e.li,{children:"Can also expose functionality via HTTP"}),`
`,n.jsx(e.li,{children:"Has minimal dependencies"}),`
`,n.jsx(e.li,{children:"Demonstrates clean Go structure"}),`
`,n.jsx(e.li,{children:"Prioritizes predictable behavior"}),`
`]}),`
`,n.jsx(e.p,{children:"One binary. Two interfaces. Same core logic."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Character Set"}),`
`,n.jsx(e.p,{children:"Passwords are generated using:"}),`
`,n.jsx(r,{language:"text",children:`abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
0123456789
!@#$%`}),`
`,n.jsx(e.p,{children:"This ensures a mix of lowercase, uppercase, numeric, and special characters."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Philosophy"}),`
`,n.jsx(e.p,{children:"The system is intentionally simple:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Single responsibility core generator"}),`
`,n.jsx(e.li,{children:"Shared logic between CLI and Web modes"}),`
`,n.jsx(e.li,{children:"Clear separation of parsing and generation"}),`
`,n.jsx(e.li,{children:"No unnecessary abstraction"}),`
`]})]})}function c(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}function o(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default,l as metadata};
