import React from "react";

import articleSeries from "@/postdata/postData";

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
