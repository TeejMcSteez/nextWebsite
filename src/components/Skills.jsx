"use client";

import { motion, useTransform, useScroll } from "framer-motion";

const imgs = [
    {src: "/assets/c++.svg", alt:"C++", ex: "https://github.com/TeejMcSteez/ESPTempSensor"},
    {src: "/assets/java.svg", alt:"Java", ex: "https://github.com/TeejMcSteez/stockChartsWebScraper"},
    {src: "/assets/js.svg", alt:"JavaScript", ex: "https://github.com/TeejMcSteez/NeilDegrasseDiscordBot"},
    {src: "/assets/node.svg", alt:"Node", ex: "https://github.com/TeejMcSteez/SRSM"},
    {src: "/assets/svelte.svg", alt:"Svelte", ex: "https://github.com/TeejMcSteez/salonsWebsite"},
    {src: "/assets/react.svg", alt:"React", ex: "https://github.com/TeejMcSteez/nextWebsite"}
];

export default function Skills() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, -50]);

    return (
        <section className="relative overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-16"
                >
                    {imgs.map((img, index) => (
                        <motion.div
                            key={img.alt}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.2 
                            }}
                            
                            className="flex items-center justify-center"
                        >
                            <div>
                                <a href={img.ex} target="_blank" className="hover:animate-pulse">
                                <img 
                                    src={img.src} 
                                    alt={img.alt}
                                    className="w-24 h-24 object-contain"
                                />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
