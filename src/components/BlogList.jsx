"use client";
import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="rounded-xl text-4xl font-bold text-center m-6">Blog Posts</h1>
      <p className="text-lg text-gray-600 mb-4">Click on a title below to open the blog.</p>
      <ul className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <div className="flex flex-col justify-center items-center bg-neutral-100 dark:bg-zinc-900 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg m-2 hover:scale-105 transform transition-transform">
                <h2 className="text-center text-2xl font-semibold bg-neutral-100 dark:text-black hover:bg-red-800 hover:text-white rounded-lg p-3">
                  {frontmatter.title ? frontmatter.title : <span>No Title Found 😬</span>}
                </h2>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Added: {frontmatter.date ? frontmatter.date : "No Date In Metadata"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}