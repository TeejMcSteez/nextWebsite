"use client";

import { useRef } from "react";

export default function BackToTop({ targetRef }) {
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