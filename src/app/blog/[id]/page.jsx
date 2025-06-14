import { getPostData, getAllPostIds } from "@/lib/posts";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map(({ params }) => ({
        id: params.id,
    }));
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params.id);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://impulseblog.vercel.app/blog/${post.id}`,
      images: [
        {
          url: post.coverImage, 
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({ params }) {
    const { id } = params;
    const post = await getPostData(id);

    if (!post){
        notFound()
    }

    return (
        <>
            <main className="singlePost">
                <div className="header">
                    <div className="headerTitle">
                        <h1 className="headerHeading">{post.title}</h1>
                        <div className="mb-6 text-gray-600">
                            <span>{post.date}</span> •{" "}
                            <span>{post.author}</span>
                        </div>
                        <div className="cats">
                            {post.category?.map((cat) => (
                                <span key={cat} className="cat">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                    {post.coverImage && (
                        <div className="singlePostContainer">
                            <Image
                                src={post.coverImage}
                                fill
                                alt={post.title}
                                className="img"
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>
                <article
                    className="blogContent"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </main>
        </>
    );
}
