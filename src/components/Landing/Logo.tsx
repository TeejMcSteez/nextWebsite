import Typewriter from "@/components/About/Typewriter";
import { useEffect, useState } from "react";

// Basic typewriter effect for the logo text
// Still don't know if I like this or not
// I might just go with a simple text logo instead
export default function Logo() {
    const text = "Tommy Hall's Portfolio";
    const speed = 10;

    const [renderCount, setRenderCount] = useState(0);
    
        useEffect(() => {
            const count = Number(localStorage.getItem("logoRenderCount") || "0") + 1;
            localStorage.setItem("logoRenderCount", count.toString());
            setRenderCount(count);
        }, []);

    return (
        <div className="flex text-2xl bold m-1 p-2">
            <Typewriter text={text} speed={speed} renderCount={renderCount}/>
        </div>
    );
}