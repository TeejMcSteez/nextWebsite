"use client";

import { useState } from "react";
const imgs = [
    {src: "/assets/c++.svg", alt:"C++", ex: "https://github.com/TeejMcSteez/ESPTempSensor"},
    {src: "/assets/java.svg", alt:"Java", ex: "https://github.com/TeejMcSteez/stockChartsWebScraper"},
    {src: "/assets/js.svg", alt:"JavaScript", ex: "https://github.com/TeejMcSteez/NeilDegrasseDiscordBot"},
    {src: "/assets/node.svg", alt:"Node", ex: "https://github.com/TeejMcSteez/SRSM"},
    {src: "/assets/svelte.svg", alt:"Svelte", ex: "https://github.com/TeejMcSteez/salonsWebsite"},
    {src: "/assets/react.svg", alt:"React", ex: "https://github.com/TeejMcSteez/nextWebsite"}
];

const imgElements = [
    <img src="/assets/c++.svg" className="w-full h-full" loading="lazy"></img>,
    <img src="/assets/java.svg" className="w-full h-full" loading="lazy"></img>,
    <img src="/assets/js.svg" className="w-full h-full" loading="lazy"></img>,
    <img src="/assets/node.svg" className="w-full h-full" loading="lazy"></img>,
    <img src="/assets/svelte.svg" className="w-full h-full" loading="lazy"></img>,
    <img src="/assets/react.svg" className="w-full h-full" loading="lazy" />
];

export default function Skills() {
    const [index, setIndex] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }

    return (
        <section className="relative overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="container flex flex-col items-center justify-center w-48 h-48">
                        <a className="self-center justify-center items-center w-full h-full" href={imgs[index].ex}>
                            <img src={imgs[index].src} alt={imgs[index].alt} className="w-full h-full object-contain"/>
                        </a>
                    </div>
                    <button className="flex flex-col items-center w-16 hover:scale-110 transition-transform" onClick={handleClick}>
                        <img src="/assets/button.svg" className="w-full h-full" loading="lazy"/>
                    </button>
                </div>
            </div>
        </section>
    );
}
