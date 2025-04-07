"use client";
import NavBar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Loading from "@/components/ui/Loading";
import { useRef, useState, useEffect } from "react";
import { useScroll } from "@/hooks/useScroll";

export default function ClientBlogLayout({ children }) {
    const topRef = useRef(null);
    const { y } = useScroll();
    const isScrolled = y > 100;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    });

    if (!isMounted) {
        return <Loading />;
    }

    return (
        <>
            <div ref={topRef} className="flex flex-col min-h-screen">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <NavBar />
                </div>
                <main className="flex flex-col flex-grow pt-28">
                    {children}
                </main>
                <Footer />
            </div>
            {isScrolled ? <BackToTop targetRef={topRef} /> : null}
        </>
    );
}
