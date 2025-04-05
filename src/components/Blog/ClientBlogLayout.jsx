"use client";
import NavBar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
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
