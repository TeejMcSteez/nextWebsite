"use client";

import { useState, useEffect } from "react";

export default function Typewriter({text, speed = 100}) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval); // cleanup onUnmount
    }, [text, speed]);
    return (
        <div className="flex flex-col w-1/2 text-center m-5 p-5 dark:bg-zinc-900 bg-neutral-100 rounded-xl shadow-lg">{displayedText}</div>
    );
}