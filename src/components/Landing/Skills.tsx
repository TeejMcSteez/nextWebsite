"use client";

import { useEffect, useState } from "react";
import { useKeyPress } from "@/hooks/handleKeyPress";
import Image from "next/image";

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
    const [isClicked, clicked] = useState(false);

    const isKPressed = useKeyPress('f');

    useEffect(() => {
        if (isKPressed) {
            handleClick();
        }
    }, [isKPressed]);

    function handleClick(e?: React.MouseEvent<HTMLButtonElement>) {
        if (e) e.preventDefault();
        clicked(true);
        setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }

    return (
        <section className="relative overflow-hidden py-20">
            {isClicked ? <p className="dark:text-white text-xs text-center">Click on the image to go to GitHub and open a project!</p> : null}
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="container flex flex-col items-center justify-center w-48 h-48">
                        <a className="self-center justify-center items-center w-full h-full hover:blur-sm hover:animate-pulse" href={imgs[index].ex} target="_blank" >
                            <Image priority={true} height={100} width={100} src={imgs[index].src} alt={imgs[index].alt} className="w-full h-full object-contain"/>
                        </a>
                    </div>
                    <button className="flex flex-col items-center w-16 hover:scale-110 transition-transform" onClick={handleClick}>
                        <Image height={100} width={100} src="/assets/button.svg" className="w-full h-full" alt="Next Skill Button" loading="lazy"/>
                    </button>
                </div>
            </div>
        </section>
    );
}
