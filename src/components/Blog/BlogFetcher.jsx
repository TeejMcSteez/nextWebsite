"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "./BlogList";

export default async function BlogFetcher() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "app", "blog", "blogPosts"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(process.cwd(), "src", "app", "blog", "blogPosts", filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      frontmatter: data,
    };
  });

  return <BlogList posts={posts} />;
}
