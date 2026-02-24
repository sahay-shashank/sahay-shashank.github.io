import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;

}

export const THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function getOSTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark" : "light";
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw Error("useTheme must be used within ThemeProvider")
    }
    return context
}