"use client";

import { useRef } from "react";
import Skills from "./Skills";
import { useScroll } from "@/hooks/useScroll";
import BackToTop from "./BackToTop";


export default function Landing() {
    const { y } = useScroll();
    const topRef = useRef(null);
    const isScrolled = y > 100;

    return (
        <>
        <div className="flex flex-col items-center justify-center" ref={topRef}>
        <div className='flex flex-col text-center dark:bg-zinc-900 bg-neutral-100 rounded-xl shadow-lg p-10 m-4'>
            <h2 className="text-xl font-medium mb-2">Hello, I'm Tommy Hall!</h2>
            <br />
            <p className="text-xl font-medium mb-2">Student at UNCC.</p>
            <br />
            <p className="text-xl font-medium mb-2">Check Out My Contact Page Or About Me!</p>
            <footer>Click below to see projects on GitHub!</footer>
        </div>
        <div className="flex justify-center items-center">
            <Skills />  
        </div>
        </div>
        {isScrolled ? <BackToTop targetRef={topRef} /> : ""}
        </>
    );
}
