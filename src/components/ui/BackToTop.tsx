"use client";

import { RefObject } from "react";

interface BackToTopProps {
    targetRef: RefObject<HTMLElement | null>;
}

export default function BackToTop({ targetRef }: BackToTopProps) {
    const scrollToTop = () => {
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 dark:bg-zinc-900 dark:text-white bg-neutral-100 px-4 py-2 rounded shadow-lg hover:bg-red-800 transition">
        Back to Top
        </button>
        </>
    );
}