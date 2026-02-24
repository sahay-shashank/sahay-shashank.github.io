import { useTheme } from "@/context/theme";
import { NavBar, IconButton } from "@sahay-shashank/ui-library";
import { ThemeIcon } from "@/components/ThemeIcon";
import { GlitchText } from "./Glitch";

export default function NavBarComponent() {
    const links = [
        { label: "About", href: "#about" },
        { label: "Expertise", href: "#expertise" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];
    const { theme, toggleTheme } = useTheme();

    return (
        <NavBar>
            <NavBar.Logo>
                {theme === "light" ? ">_<" : <GlitchText text="0_0" />}
            </NavBar.Logo>
            <NavBar.Links>
                {links.map((link) => (
                    <NavBar.LinkItem key={link.href}>
                        <a key={link.href} href={link.href}>{link.label}</a>
                    </NavBar.LinkItem>
                ))}

            </NavBar.Links>
            <NavBar.Actions>
                <IconButton icon={<ThemeIcon theme={theme} />} onClick={toggleTheme} />
            </NavBar.Actions>
        </NavBar>
    )
}