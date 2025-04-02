"use client";

import Masonry from "@mui/lab/Masonry";
import { ImageList, ImageListItem } from "@mui/material";
import { useState, useRef } from "react";
const imgs = [
    {src: "/assets/c++.svg", alt:"C++", ex: "https://github.com/TeejMcSteez/ESPTempSensor"},
    {src: "/assets/java.svg", alt:"Java", ex: "https://github.com/TeejMcSteez/stockChartsWebScraper"},
    {src: "/assets/js.svg", alt:"JavaScript", ex: "https://github.com/TeejMcSteez/NeilDegrasseDiscordBot"},
    {src: "/assets/node.svg", alt:"Node", ex: "https://github.com/TeejMcSteez/SRSM"},
    {src: "/assets/svelte.svg", alt:"Svelte", ex: "https://github.com/TeejMcSteez/salonsWebsite"},
    {src: "/assets/react.svg", alt:"React", ex: "https://github.com/TeejMcSteez/nextWebsite"}
];

export default function Skills() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }

    return (
        <section className="relative overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="container flex flex-col items-center">
                        <a href={imgs[index].ex}><img src={imgs[index].src} alt={imgs[index].alt}/></a>
                    </div>
                    <a href="#" className="flex flex-col items-center" onClick={handleClick}><img src="/assets/button.svg" className="md:w-1/2 md:h-1/2 w-1/4 h-1/4"/></a>
                </div>
            </div>
        </section>
    );
}
