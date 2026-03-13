import React from "react"
import type { MDXComponents } from 'mdx/types'


export const defaultMdxComponents: MDXComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-4xl md:text-6xl font-bold my-6 heading-font" {...props} />
  ),

  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl md:text-4xl font-semibold my-6 heading-font" {...props} />
  ),

  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl font-medium my-6 heading-font" {...props} />
  ),

  p: (props: React.ComponentProps<"p">) => (
    <p className="m-4 leading-relaxed" {...props} />
  ),

  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc ml-6 mb-4 text-sm code-font" {...props} />
  ),

  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-2" {...props} />
  )
}
