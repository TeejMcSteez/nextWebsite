"use client"; // Mark this as a client component
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="rounded-xl text-3xl text-center m-4">Blog Posts</h1>
      <p>Click on a title below to open the blog.</p>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <div className="flex flex-col justify-center items-center bg-neutral-100 dark:bg-zinc-900 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm m-2">
                <h2 className="justify-center text-center text-3xl bg-neutral-100 dark:text-black hover:bg-red-800 rounded-xl p-3">{frontmatter.title}</h2>
                <p className="text-center ">Added: {frontmatter.date ? frontmatter.date : "No Date In Metadata"}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
