import React from "react"
import type { MDXComponents } from 'mdx/types'


export const defaultMdxComponents: MDXComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-3xl font-bold mb-4" {...props} />
  ),

  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl font-semibold mb-3" {...props} />
  ),

  h3: (props: React.ComponentProps<"h3">) => (
    <h2 className="text-xl font-medium mb-3" {...props} />
  ),

  p: (props: React.ComponentProps<"p">) => (
    <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
  ),

  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc ml-6 mb-4" {...props} />
  ),

  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-2" {...props} />
  )
}
