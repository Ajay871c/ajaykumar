"use client";

import dynamic from "next/dynamic";
import React from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
});

const TypewriterText = () => {
    return (
        <div className="typeText">
            <Typewriter
                options={{
                    strings: ["A physics enthusiast.", "Hobby Writer."],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
};

export default TypewriterText;
