"use client";
import React from "react";

const page = () => {
    return (
        <section className="about">
            <div className="about__hero-image">
                <img src="/profile.jpg" alt="Ajay's portrait" loading="lazy" />
            </div>
            <div className="about__hero">
                <h1>Hello, I'm Ajay 👋</h1>
                <p>
                    Physics lover by passion, storyteller by heart. I explore
                    the universe through equations and imagination — blending
                    science with fiction to make both worlds come alive.
                </p><br />
                <p>
                    <strong>Specialization: </strong>Condensed Matter Physics
                </p>
            </div>

            <div className="about__content">
                <h2>About Me</h2>
                <p>
                    My love for physics comes from an endless curiosity about
                    how the universe works. From the tiniest particles to the
                    vastness of space-time, I’m captivated by the elegance of
                    natural laws and the beauty of mathematical descriptions. I
                    enjoy diving deep into complex theories, solving problems,
                    and exploring the "why" behind every "what." For me, physics
                    isn’t just a subject — it’s a way of thinking, of seeing
                    patterns in chaos and uncovering the hidden order in the
                    world around us.
                </p>

                <p>
                    On the other side of my personality lives a storyteller —
                    someone who finds joy in creating characters, weaving plots,
                    and building fictional worlds. Writing allows me to express
                    imagination beyond equations, to explore human emotions,
                    conflicts, and dreams. Through my stories, I aim to connect,
                    inspire, and take readers on journeys where anything is
                    possible. Whether it's mystery, adventure, or fantasy, I
                    write with passion and purpose — because stories, like
                    physics, reveal truths in their own unique way.
                </p>
                <br />

                <h2>Skills</h2>
                <div className="about__skills">
                    <span>Python</span>
                    <span>Fortran</span>
                    <span>Numerical Analysis</span>
                    <span>Comsol Multiphysics</span>
                    <span>Setfos</span>
                    <span>Nympy</span>
                    <span>Scipy</span>
                    <span>Matplotlib</span>
                    <span>Qutip</span>
                    <span>Qiskit</span>
                </div>
            </div>
        </section>
    );
};

export default page;
