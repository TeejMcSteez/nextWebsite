"use client";

import Masonry from "@mui/lab/Masonry";
import { ImageList, ImageListItem } from "@mui/material";
const imgs = [
    {src: "/assets/c++.svg", alt:"C++", ex: "https://github.com/TeejMcSteez/ESPTempSensor"},
    {src: "/assets/java.svg", alt:"Java", ex: "https://github.com/TeejMcSteez/stockChartsWebScraper"},
    {src: "/assets/js.svg", alt:"JavaScript", ex: "https://github.com/TeejMcSteez/NeilDegrasseDiscordBot"},
    {src: "/assets/node.svg", alt:"Node", ex: "https://github.com/TeejMcSteez/SRSM"},
    {src: "/assets/svelte.svg", alt:"Svelte", ex: "https://github.com/TeejMcSteez/salonsWebsite"},
    {src: "/assets/react.svg", alt:"React", ex: "https://github.com/TeejMcSteez/nextWebsite"}
];

export default function Skills() {

    return (
        <section className="relative overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <ImageList sx={{width: 300, height: 175}} cols={1}>
                    {imgs.map((img, index) => (
                        <ImageListItem key={index}>
                            <a className="self-center" href={img.ex}><img src={img.src} alt={img.alt} loading="lazy"/></a>
                            <p className="text-xs text-center dark:text-white">{img.alt}</p>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </section>
    );
}
