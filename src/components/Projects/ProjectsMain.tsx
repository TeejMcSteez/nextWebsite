"use client";
import NavBar from '@/components/ui/Navbar';
import Projects from '@/components/Projects/Projects';
import BackToTop from '@/components/ui/BackToTop';
import { useRef } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { motion } from 'framer-motion';

export default function ProjectsMain() {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;


    return (
        <>
            <motion.div ref={topRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <NavBar />
                <Projects />
                {isScrolled ? <BackToTop targetRef={topRef} /> : ""}
            </motion.div>
        </>
    );
}