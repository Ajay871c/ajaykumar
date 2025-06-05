import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";


const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ""),
        },
    }));
}

export async function getPostData(id) {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        const processedContent = await unified()
            .use(remarkParse)          // Parse markdown to mdast
            .use(remarkGfm)            // Support tables, strikethrough etc.
            .use(remarkMath)           // Parse math blocks
            .use(remarkRehype)         // Convert mdast to hast (bridge)
            .use(rehypeKatex)          // Render math to HTML
            .use(rehypeStringify)      // Serialize HTML
            .process(matterResult.content);

        const contentHtml = processedContent.toString();

        return {
            id,
            contentHtml,
            ...matterResult.data,
        };
    } catch (error) {
        console.error("Error in getPostData:", error);
        throw error;
    }
}