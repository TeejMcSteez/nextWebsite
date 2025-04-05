"use client";
import NavBar from '@/components/ui/Navbar';
import Projects from '@/components/Projects/Projects';
import BackToTop from '@/components/ui/BackToTop';
import { useRef } from 'react';
import { useScroll } from '@/hooks/useScroll';

export default function ProjectsMain() {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;


    return (
        <>
            <div ref={topRef}>
                <NavBar />
                <Projects />
                {isScrolled ? <BackToTop targetRef={topRef} /> : ""}
            </div>
        </>
    );
}