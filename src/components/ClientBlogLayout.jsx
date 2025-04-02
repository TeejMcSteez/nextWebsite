"use client";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useRef } from "react";
import { useScroll } from "@/hooks/useScroll";

export default function ClientBlogLayout({ children }) {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;

    return (
        <>
            <div ref={topRef} className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex flex-col flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
            {isScrolled ? <BackToTop targetRef={topRef} /> : null}
        </>
    );
}
