"use client";
import Image from "next/image";
import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <div className="imgCont">
                    <Image src="/contact.webp" fill alt="Contact image" />
                </div>
                <p>
                    If you have any questions, feedback, or just want to say
                    hello, feel free to reach out using the form.
                </p>
            </div>
            <form
                action="https://formsubmit.co/ajaykumarmohapatra80@gmail.com"
                method="post"
                className="right"
            >
                <h2>Contact Me</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
