import { useState } from "react"

interface ContactProps {
    email: string
}

function Contact({ email }: ContactProps) {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        await navigator.clipboard.writeText(email)
        setCopied(true)

        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="px-6 py-20 border-t border-gray-200">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-semibold">
                    Let's build something interesting together.
                </h2>

                <p className="text-gray-500">
                    Have an idea, opportunity, or just want to connect?
                    Feel free to reach out.
                </p>

                {/* Email Display */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <span className="text-lg font-medium">{email}</span>

                    <button
                        onClick={handleCopy}
                        className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-400 transition"
                    >
                        {copied ? "Copied!" : "Copy Email"}
                    </button>
                </div>

                {/* Mailto CTA */}
                <a
                    href={`mailto:${email}?subject=Hello&body=Hi, I saw your portfolio.`}
                    className="inline-block mt-4 px-6 py-3 rounded-xl border bg-purple-500 text-white hover:opacity-90 transition"
                >
                    Say Hello
                </a>
            </div>
        </section>
    )
}

export default Contact
