"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPost from "./BlogPost";

export default async function BlogPostFetcher({ slug }) {
    const file = fs.readFileSync(path.join(process.cwd(), "src", "app", "blog", "blogPosts", `${slug.replaceAll("%20", " ")}.md`), "utf-8");

    const { data } = matter(file);
    return <BlogPost blogContent={{ data, file}} />;
}