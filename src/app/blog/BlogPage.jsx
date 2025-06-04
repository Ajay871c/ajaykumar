"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 10;

export default function BlogPage({ posts: initialPosts }) {
    // eslint-disable-next-line no-unused-vars
    const [posts, setPosts] = useState(initialPosts);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = posts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category
            ? post.category?.includes(category)
            : true;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    const paginated = filtered.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const categories = [...new Set(posts.flatMap((p) => p.category || []))];

    useEffect(() => {
        setCurrentPage(1);
    }, [search, category]);

    return (
        <div className="blogList">
            <div className="blogHead">
                <h1 className="BlogListTitle">Blogs</h1>
            </div>

            <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="searchInput"
            />

            <div className="categories">
                <button
                    onClick={() => setCategory(null)}
                    className={`category ${!category ? "active" : ""}`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`category ${
                            category === cat ? "active" : ""
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <ul className="BlogList">
                {paginated.map((post) => (
                    <article key={post.id} className="blogPost">
                        <div className="blogImageContainer">
                            <Image
                                src={post.coverImage}
                                fill
                                alt={post.title}
                                className="blogImage"
                            />
                        </div>
                        <div className="content">
                            <h2 className="blogTitle">
                                <Link href={`/blog/${post.id}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="blogDesc">{post.description}</p>
                            <div className="blogInfo">
                                {post.date} • {post.author}
                            </div>
                            <div className="blogCats">
                                {post.category?.map((cat) => (
                                    <span key={cat} className="blogCat">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </ul>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`page ${
                            currentPage === i + 1 ? "active" : ""
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
