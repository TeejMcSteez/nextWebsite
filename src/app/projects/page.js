"use client";
import NavBar from '@/components/Navbar';
import Projects from '@/components/Projects';
import BackToTop from '@/components/BackToTop';
import { useRef } from 'react';
import { useScroll } from '@/hooks/useScroll';

export default function Proj() {
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