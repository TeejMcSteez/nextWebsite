"use client";
import React, { useRef } from "react";
import BackToTop from "./BackToTop";
import { useScroll } from "@/hooks/useScroll";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ blogContent }) {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 0;

    const data = blogContent.data;
    const info = blogContent.file;
    return (
        <div className="flex flex-col items-center justify-center bg-neutral-200 dark:bg-zinc-800 p-4" ref={topRef}>
        <p className="text-center ">Added: {data.date ? data.date : "No Date In Metadata"}</p>
        <div className="flex flex-col justify-center items-center bg-neutral-100 dark:bg-zinc-900 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm m-2">
            <ReactMarkdown>{info}</ReactMarkdown>
        </div>
            {isScrolled ? <BackToTop targetRef={topRef}/> : null}
        </div>
    );
}