"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
}

export default function Typewriter({ text, speed = 100 }: TypewriterProps) {
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
        <>
        {displayedText}
        </>
    );
}