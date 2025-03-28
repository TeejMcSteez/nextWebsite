/**Credits 
 * 2025-03-27 15:57:29.187 [info] file:///c%3A/Users/clary/OneDrive/Desktop/TeejsStuff/nextWebsite/src/app/about/page.js Similar code at  [Ln 15, Col 4] const handleScroll = () => {  setScrollPosition({  x: window.scroll...
 * 2025-03-27 15:57:29.187 [info] License: unknown, URL: https://github.com/chrisburch96/vsha-ui/blob/738d59b80725c0c09d2da464e60ae1633530fe31/hooks/useScrollPosition.tsx
 * 2025-03-27 15:57:30.851 [info] file:///c%3A/Users/clary/OneDrive/Desktop/TeejsStuff/nextWebsite/src/app/about/page.js Similar code at  [Ln 15, Col 11] nst handleScroll = () => {  setScrollPosition({  x: window.scrollX,...
 * 2025-03-27 15:57:30.851 [info] License: unknown, URL: https://github.com/chrisburch96/vsha-ui/blob/738d59b80725c0c09d2da464e60ae1633530fe31/hooks/useScrollPosition.tsx
 * 2025-03-27 15:57:31.716 [info] file:///c%3A/Users/clary/OneDrive/Desktop/TeejsStuff/nextWebsite/src/app/about/page.js Similar code at  [Ln 15, Col 24] oll = () => {  setScrollPosition({  x: window.scrollX,...
 * 2025-03-27 15:57:31.716 [info] License: unknown, URL: https://github.com/chrisburch96/vsha-ui/blob/738d59b80725c0c09d2da464e60ae1633530fe31/hooks/useScrollPosition.tsx
 */
"use client";

import Typewriter from "@/components/Typewriter";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useRef, useState, useEffect } from "react";
import { useScroll } from "@/hooks/useScroll";

export default function About() {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;

    return (
        <>
        <div ref={topRef} className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex flex-col flex-grow place-items-center overflow-scroll">
                <Typewriter text={"About Me"} speed={100}/>
                <Typewriter text={"I am passionate about web development and security, while in school I have mainly stuck with web development to learn how to program and how computers work in general I aim to learn more about cybersecurity."} speed={7}/>
                <Typewriter text={"Aside from my time programming and in school I enjoy working with hardware to such as building computers (up to 6 now) as well as playing with microcontrollers like the ESP32. I also enjoy 3D printing parts and useful little things like a Xbox controller holder."} speed={7}/>
                <Typewriter text={"When i'm not on the computer me and my partner enjoy travelling to the mountains or the beach with our dog and spending time outside."} speed={7}/>
                <Typewriter text={"Thats me! Check out my GitHub for some of my recent projects!"} speed={7}/>
            </main>
            <Footer />
        </div>
        {isScrolled ? <BackToTop targetRef={topRef} /> : ""}
        </>
    );
}