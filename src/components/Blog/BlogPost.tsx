"use client";

import React, { useEffect, useRef } from "react";
import BackToTop from "@/components/ui/BackToTop";
import { useScroll } from "@/hooks/useScroll";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown";
import { useKeyPress } from "@/hooks/handleKeyPress";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CustomHeadingProps = {
    children?: React.ReactNode;
};

type BlogData = {
    date?: string;
    [key: string]: unknown;
};

type BlogContent = {
    data: BlogData;
    file: string;
};

const CustomH1: React.FC<CustomHeadingProps> = ({ children }) => {
    return <h1 className="text-2xl font-bold">{children}</h1>;
};

const CustomH2: React.FC<CustomHeadingProps> = ({ children }) => {
    return <h2 className="text-xl font-semibold">{children}</h2>;
};

const CustomH3: React.FC<CustomHeadingProps> = ({ children }) => {
    return <h3 className="font-medium underline">{children}</h3>;
};

const CustomP: React.FC<CustomHeadingProps> = ({ children }) => {
    return <p className="text-neutral-900 dark:text-neutral-100 leading-relaxed">{children}</p>;
};

const customA: Components["a"] = ({ children, ...props }) => {
    return (
        <a
            className="underline italic text-blue-600"
            {...props}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default function BlogPost({ blogContent }: { blogContent: BlogContent }) {
    const router = useRouter();
    const topRef = useRef<HTMLDivElement>(null);
    const { y } = useScroll();
    const isScrolled = y > 0;

    const data = blogContent.data;
    const info = blogContent.file;
    const mergedComponents: Components = {
        h1: CustomH1,
        p: CustomP,
        h2: CustomH2,
        h3: CustomH3,
        a: customA,
    };

    const isKPressed = useKeyPress("f");

    useEffect(() => {
        if (isKPressed) {
            router.push("/blog");
        }
    }, [isKPressed, router]);

    return (
        <div
            className="flex flex-col items-center justify-center bg-neutral-200 dark:bg-zinc-800 p-4"
            ref={topRef}
        >
            <p className="text-center">
                Added: {data.date ? data.date : "No Date In Metadata"}
            </p>
            <div className="flex flex-col justify-center items-center bg-neutral-100 dark:bg-zinc-900 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm m-2 text-pretty">
                <ReactMarkdown components={mergedComponents}>
                    {info}
                </ReactMarkdown>
            </div>
            <p>Press F to go back</p>
            <Link className="flex flex-col items-center justify-center" href="/blog">
                <Image
                    height={100}
                    width={100}
                    src="/assets/button.svg"
                    className="md:w-1/2 md:h-1/2 md:m-1 w-1/4 m-5"
                    alt="Back to Blog"
                />
            </Link>
            {isScrolled ? <BackToTop targetRef={topRef} /> : null}
        </div>
    );
}