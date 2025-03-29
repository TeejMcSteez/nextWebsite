"use client";

import { motion, useTransform, useScroll } from "framer-motion";

const imgs = [
    {src: "/assets/c++.svg", alt:"C++"},
    {src: "/assets/java.svg", alt:"Java"},
    {src: "/assets/js.svg", alt:"JavaScript"},
    {src: "/assets/node.svg", alt:"Node"},
    {src: "/assets/svelte.svg", alt:"Svelte"},
    {src: "/assets/react.svg", alt:"React"}
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
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-24 h-24 object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
