"use client";
import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <h2>Contact Me</h2>
                <p>
                    If you have any questions, feedback, or just want to say
                    hello, feel free to reach out using the form below.
                </p>
            </div>
            <form
                action="https://formsubmit.co/ajaykumarmohapatra80@gmail.com"
                method="post"
                className="right"
            >
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
