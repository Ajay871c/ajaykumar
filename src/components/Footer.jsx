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
                    <small className="">
                        &copy; {new Date().getFullYear()} impulseblog. All
                        rights reserved.
                    </small>
                </div>

                <div className="socialLinks">
                    <Link href="/sitemap.xml"><small>Sitemap</small></Link>
                    <Link href="/privacy"><small>Privacy Policies</small></Link>
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
