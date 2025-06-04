"use client";
import React from "react";
import Link from "next/link";
import Facebook from "@/svgs/Facebook";
import Telegram from "@/svgs/Telegram";
import Instagram from "@/svgs/Instagram";
import Github from "@/svgs/Github";


const Footer = () => {
    return (
        <footer className="">
                <div className="">
                    <p className="">
                        &copy; {new Date().getFullYear()} ajay871c.vercel.app. All
                        rights reserved.
                    </p>
                </div>

                <div className="socialLinks">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <Facebook/>
                    </Link>
                    <Link
                        href="https://telegram.org"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <Telegram />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <Instagram/>
                    </Link>
                    <Link
                        href="https://github.com"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <Github />
                    </Link>
                </div>
        </footer>
    );
};

export default Footer;
