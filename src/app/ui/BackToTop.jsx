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
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded shadow-lg hover:bg-red-800 transition">
        Back to Top
        </button>
        </>
    );
}