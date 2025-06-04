"use client";

import TypewriterText from "@/components/TypeWriterText";
import Link from "next/link";

export default function Home() {
    return (
        <main className="hero">
            <div className="text">
                <h1>Hey, I’m Ajay Kumar. </h1> <TypewriterText />
            </div>
            <p>
                A curious mind exploring the universe through physics and
                weaving worlds through words.
            </p>
            <div className="btns">
                <Link href="/" className="btn-1">
                    About Me
                </Link>
                <Link href="/blog" className="btn-2">
                    Blogs
                </Link>
            </div>
        </main>
    );
}
