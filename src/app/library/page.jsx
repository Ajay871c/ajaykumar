import React from "react";

const articleSeries = [
    {
        id: 1,
        title: "Understanding General Relativity: From Curved Space to Black Holes",
        article: [
            {
                id: 1,
                name: "Why Space Curves — The Need for General Relativity",
                url: "/blog/why-space-curves-the-need-for-general-relativity",
            },
            {
                id: 2,
                name: "Geometry of Spacetime — Curvature and Coordinates",
                url: "/blog/geometry-of-spacetime-curvature-and-coordinates",
            },
            {
                id: 3,
                name: "Einstein’s Field Equations — Meaning and Motivation",
                url: "/blog/einstein-field-equations-explained",
            },
        ],
    },
    {
        id: 2,
        title: "The Quantum Vacuum: Nothingness Full of Everything",
        article: [
            {
                id: 1,
                name: "What Is a Vacuum? From Aristotle to Quantum Fields",
                url: "/blog/what-is-a-vacuum",
            },
            {
                id: 2,
                name: "Quantum Fluctuations: The Heartbeat of Empty Space",
                url: "/blog/quantum-fluctuations-the-heartbeats-of-empty-space",
            },
            {
                id: 3,
                name: "The Casimir Effect: When Empty Space Pushes",
                url: "/blog/the-casimir-effect",
            },
            {
                id: 4,
                name: "Whispers of the Vacuum: Lamb Shift & Spontaneous Emission",
                url: "/blog/whispers-of-the-vacuum-lamb-shift-and-spontaneous-emission",
            },
            {
                id: 5,
                name: "When Black Holes Leak: Hawking Radiation & the Vacuum",
                url: "/blog/when-black-holes-leak-hawking-radiation-and-the-vacuum",
            },
            {
                id: 6,
                name: "The Dark Side of the Vacuum: Energy, Expansion & Catastrophes",
                url: "/blog/the-dark-side-of-vacuum",
            },
            {
                id: 7,
                name: "Why the Quantum Vacuum Is the Future of Physics",
                url: "/blog/why-the-quantumvacuum-is-the-future-of-physics",
            },
        ],
    },
];

const LibraryPage = () => {
    return (
        <main className="library">
            <div className="libraryTitle">
                <h1>Series</h1>
            </div>
            {articleSeries.map((articles) => (
                <div className="articleSerieses" key={articles.id}>
                    <div className="articleSeries">
                        <h2>{articles.title}</h2>
                        <ul>
                            {articles.article.map((article) => (
                                <li className="article" key={article.id}>
                                    <a href={article.url}>{article.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default LibraryPage;
