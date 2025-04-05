"use client";

import NavBar from "@/components/ui/Navbar";
import Landing from "./Landing";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Skills from "./Skills";

import { useScroll } from "@/hooks/useScroll"

import { useRef } from "react";

export default function Main() {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;

    return (
        <>  
            <div ref={topRef} className="flex flex-col">
                <main className="min-h-screen">
                    <NavBar />
                    <div className="flex flex-col items-center justify-center mt-20 md:mt-24">
                        <Landing />
                    </div>

                    <div className="flex justify-center items-center">
                        <Skills />
                    </div>
                </main>
                <Footer />
            </div>
            {isScrolled ? <BackToTop targetRef={topRef} /> : null}
        </>
      );

}