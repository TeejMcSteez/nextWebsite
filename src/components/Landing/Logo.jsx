
import { useState, useEffect } from "react";

// Basic typewriter effect for the logo text
export default function Logo() {
    const text = "Tommy Hall's Portfolio";
    const speed = 58;
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
        <h1 className="flex flex-row m-1 p-2 text-2xl bold">{displayedText}</h1>
    );
}