"use client";

import Landing from "@/components/Landing";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import { useScroll } from "@/hooks/useScroll";
import { useRef } from "react";

export default function Home() {
  const { y } = useScroll();
  const isScrolled = y > 100;
  const topRef = useRef(null);

  return (
    <>
      <div className="flex flex-col min-h-screen" ref={topRef}>
        <NavBar />
        <main className="flex flex-grow items-center justify-center mt-20 md:mt-1">
          <Landing />
        </main>
        <Footer />
      </div>
      {isScrolled ? <BackToTop targetRef={topRef} /> : null}
    </>
  );
}
