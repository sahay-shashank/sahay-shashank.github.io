import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
    className?: string
    code: string
    language?: string
}

export function CodeBlock({ code, language = "tsx", className = "" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={`group relative rounded-2xl border border-zinc-700 bg-zinc-900 text-zinc-100 overflow-hidden ${className}`}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 text-xs bg-zinc-800 border-b border-zinc-700">
                <span className="uppercase tracking-wider text-zinc-400">
                    {language}
                </span>

                <button
                    onClick={handleCopy}
                    className="opacity-0 group-hover:opacity-100 transition"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>

            {/* Code */}
            <pre className="p-4 text-sm overflow-x-auto">
                <code>{code}</code>
            </pre>

            {/* Subtle glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        </div>
    )
}