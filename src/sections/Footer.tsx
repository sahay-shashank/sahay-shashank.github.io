import { Mail } from "lucide-react"
import Github_Black from '@/assets/GitHub_Black.svg'
import Github_White from '@/assets/GitHub_White.svg'
import Linkedin_Black from '@/assets/Linkedin-Black.png'
import Linkedin_White from '@/assets/Linkedin-White.png'

import { useTheme } from "@/context/theme"

interface SocialLink {
    icon: React.ReactNode
    darkIcon?: React.ReactNode
    href: string
    label: string
    hoverClass: string
}

interface username {
    github: string
    linkedin: string
}

interface FooterProps {
    email: string
    username: username
}

function Footer(props: FooterProps) {
    const { theme } = useTheme()

    const socials: SocialLink[] = [
        {
            icon: <Mail className="size-6" />,
            href: `mailto:${props.email}`,
            label: "Email",
            hoverClass: "hover:bg-red-500 hover:text-white hover:border-red-500",
        },
        {
            icon: <img src={Github_Black} alt="GitHub" className="size-6" />,
            darkIcon: <img src={Github_White} alt="GitHub" className="size-6" />,
            href: `https://github.com/${props.username.github}`,
            label: "GitHub",
            hoverClass: "hover:bg-green-500 hover:text-white hover:border-green-500",
        },
        {
            icon: <img src={Linkedin_Black} alt="Linkedin" className="size-6" />,
            darkIcon: <img src={Linkedin_White} alt="Linkedin" className="size-6" />,
            href: `https://linkedin.com/in/${props.username.linkedin}`,
            label: "LinkedIn",
            hoverClass: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
        },

    ]

    return (
        <footer className="border-t border-gray-200 px-6 py-10">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                {/* Social Icons */}
                <div className="flex justify-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className={`p-3 rounded-xl border border-gray-300 transition duration-300 ${social.hoverClass}`}
                        >
                            {social.darkIcon && theme === "dark" ? social.darkIcon : social.icon}
                        </a>
                    ))}
                </div>

                {/* Footer Text */}
                <p className="text-sm text-(--subtext)">
                    Built with React, TypeScript, Vite & TailwindCSS. Automated with Taskfile and GitHub Actions.
                </p>

                <p className="text-xs text-(--subtext)">
                    &copy; {new Date().getFullYear()} Shashank Sahay
                </p>
            </div>
        </footer>
    )
}

export default Footer
