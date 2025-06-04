"use client";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        setThemeLoaded(true);
    }, []);

    if (!themeLoaded) return null;

    return children;
};

export default ThemeProvider;
