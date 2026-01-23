import { type ReactNode, useState, useEffect, useMemo } from "react";
import { THEME_KEY, ThemeContext, getOSTheme, type Theme } from "../context/theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem(THEME_KEY) as Theme) || getOSTheme();
    })

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const handler = () => {
            if (!localStorage.getItem(THEME_KEY)) {
                setTheme(media.matches ? "dark" : "light");
            }
        };

        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => {
            const next: Theme = prev === "dark" ? "light" : "dark";
            localStorage.setItem(THEME_KEY, next);
            return next;
        });
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
