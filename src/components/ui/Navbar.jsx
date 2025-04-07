"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '@/hooks/useWindowSize';
import Logo from '@/components/Landing/Logo';
import Links from '@/components/Landing/Links';

export default function NavBar() {

    const { width } = useWindowSize();
    const isMobile = width < 768; // Adjust the breakpoint as needed

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    // Testing button state for mobile view
    // I want it to ease the menu in and out of view when clicked
    function buttonState() {
        // If mobile menu is open
        if (isOpen) {
            // If mobile view is also smaller than 768px (not a tablet or big phone)
            if (isMobile) {
                return (
                    <motion.div
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    
                    className='absolute top-0 right-0 m-5 p-3 dark:bg-zinc-800 bg-neutral-300 items-center rounded-xl overflow-auto'>
                        <div className='flex flex-col items-center justify-center text-center'>
                            <Links />
                        </div>
                        
                        <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        
                        className='flex items-center text-white m-2 p-2 text-center' onClick={toggleOpen}>
                        {isOpen ? <a className='flex flex-col justify-center hover:bg-black p-2 m-1 rounded text-xl' href='#'>❌</a> : null}
                        </motion.button>
                    </motion.div>
                );
            } else {
                return (
                    <motion.div
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    
                    className='flex md:hidden sm:flex-row flex-col dark:bg-zinc-800 rounded-xl m-1 p-2 overflow-auto'>
                        <div className='flex sm:flex-row flex-col items-center justify-center text-center'>
                            <Links />
                        </div>
                        
                        <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        
                        className='flex items-center text-white m-2 p-2 items-center justify-center text-center' onClick={toggleOpen}>
                        {isOpen ? <a className='absolute hover:bg-black p-2 rounded text-xl' href='#'>❌</a> : null}
                        </motion.button>
                    </motion.div>
                );
            }
        } else {
            return (
                <motion.div
                transition={{ duration: 0.75, ease: "easeInOut" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                className='w-1/10 md:hidden
                dark:invert-20 rounded-xl m-1 items-center justify-center text-center'
                >
                <a href="#" onClick={toggleOpen}><img src='assets/menu.svg' className='motion-safe:hover:animate-spin'/></a> 
                </motion.div>
            );
        }
    }

    return (
        <>
        <header className='flex items-center justify-between bg-neutral-100 dark:bg-zinc-900 p-2'>
            <Logo />

            <nav className='hidden md:flex m-5 text-white'>
                <Links />
            </nav>

            {buttonState()}

        </header>
        </>
    );
}