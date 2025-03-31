"use client";
import React, { useRef } from "react";
import BackToTop from "./BackToTop";
import { useScroll } from "@/hooks/useScroll";
import ReactMarkdown from "react-markdown";

const CustomH1 = ({ children }) => {
    return <h1 className="text-2xl font-bold">{children}</h1>;
};

const CustomH2 = ({ children }) => {
    return <h2 className="text-xl font-semibold">{children}</h2>
};

const CustomH3 = ({ children }) => {
    return <h3 className="font-medium underline">{children}</h3>
};

const CustomP = ({ children }) => {
    return <p className="text-neutral-900 dark:text-neutral-100 leading-relaxed">{children}</p>;
};

const customA = ({ children, ...props }) => { // props are link embedded within the markdown/a tag
    return <a className="underline italic text-blue-600" {...props} target="_blank" rel="noopener noreferrer" >{children}</a>
};

export default function BlogPost({ blogContent }) {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 0;

    const data = blogContent.data;
    const info = blogContent.file;

    const defaultComponents = ReactMarkdown.defaultProps?.components || {};
    const mergedComponents = { ...defaultComponents, h1: CustomH1, p: CustomP, h2: CustomH2, h3: CustomH3, a: customA};

    return (
        <div className="flex flex-col items-center justify-center bg-neutral-200 dark:bg-zinc-800 p-4" ref={topRef}>
            <p className="text-center">
                Added: {data.date ? data.date : "No Date In Metadata"}
            </p>
            <div className="flex flex-col justify-center items-center bg-neutral-100 dark:bg-zinc-900 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm m-2">
                <ReactMarkdown components={mergedComponents}>
                    {info}
                </ReactMarkdown>
            </div>
            {isScrolled ? <BackToTop targetRef={topRef}/> : null}
        </div>
    );
}