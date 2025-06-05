"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);

    // Load saved theme from localStorage on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.body.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    // Toggle handler
    const toggleDarkMode = () => {
        if (isDark) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">@Ajay871c</a>
            </div>
            <ul>
                <li>
                    <Link href="/blog">Blogs</Link>
                </li>
                <li>
                    <Link href="/library">Library</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <button onClick={toggleDarkMode} className="togBtn">
                        {isDark ? "🌞" : "🌙"}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
