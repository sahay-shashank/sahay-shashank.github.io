import { Button, NavBar } from "@sahay-shashank/ui-library";
import { useTheme } from "../context/theme";

export default function NavBarComponent() {
    const links = [
        { label: "About", href: "#About" },
        { label: "Expertise", href: "#Expertise" },
        { label: "Projects", href: "#Projects" },
        { label: "Contact", href: "#Contact" },
    ];
    const { toggleTheme } = useTheme();

    return (
        <NavBar>
            <NavBar.Logo>SS</NavBar.Logo>
            <NavBar.Links links={links} />
            <NavBar.Actions>
                <Button variant="primary" onClick={toggleTheme}>Change Theme</Button>
            </NavBar.Actions>
        </NavBar>
    )
}