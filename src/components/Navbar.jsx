"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '@/hooks/useWindowSize';

export default function NavBar() {

    const { width } = useWindowSize();
    const isMobile = width < 768; // Adjust the breakpoint as needed

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    function buttonState() {
        if (isOpen) {
            return (
                <>
                <div className='flex md:hidden sm:flex-row flex-col dark:bg-zinc-800 rounded-xl m-1 p-2 overflow-auto'>
                    <div className='flex flex-row items-center justify-center text-center'>
                        <a href="/" className="p-2 m-2 bg-red-600 rounded hover:bg-red-800 text-white w-1/2">Home</a>
                        <a href="/about" className="p-2 m-2 bg-red-600 rounded hover:bg-red-800 text-white w-1/2">About</a>
                        <a href="/contact" className="p-2 m-2 bg-red-600 rounded hover:bg-red-800 text-white w-1/2">Contact</a>
                        <a href="/blog" className="p-2 m-2 bg-red-600 rounded hover:bg-red-800 text-white w-1/2">Blog</a>
                        <a href="/projects" className="p-2 m-2 bg-red-600 rounded hover:bg-red-800 text-white w-1/2">Projects</a>
                    </div>
                    
                    <button className='text-white m-2 p-2 items-center justify-center text-center' onClick={toggleOpen}>
                    {isOpen ? <a className='hover:bg-black hover:animate-pulse p-2 rounded text-xl' href='#'>❌</a> : null}
                    </button>
                </div>
                </>
            );
        } else {
            return (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                className='w-1/10 md:hidden
                dark:bg-zinc-800 rounded-xl m-1 items-center justify-center text-center'
                >
                <a href="#" onClick={toggleOpen}><img src='assets/menu.svg'/></a> 
                </motion.div>
            );
        }
    }

    return (
        <>
        <header className='flex items-center justify-between bg-neutral-100 dark:bg-zinc-900 p-2'>
            {isOpen && isMobile ? null : <h1 className='m-5 text-2xl text-start items-start'>Tommy Halls Portfolio</h1>}

            <nav className='hidden md:block m-5 text-white'>
                <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
                <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">About</a>
                <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
                <a href="/blog" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Blog</a>
                <a href="/projects" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Projects</a>

            </nav>

            {buttonState()}

        </header>
        </>
    );
}