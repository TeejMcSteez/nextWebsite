"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '@/hooks/useWindowSize';
import Logo from '@/components/Landing/Logo';
import Links from '@/components/Landing/Links';
import Link from 'next/link';
import NavbarMenuButton from '@/components/ui/NavbarMenuButton';

export default function NavBar() {

    const { width } = useWindowSize();
    const isMobile = (width ?? 0) < 768; // Adjust the breakpoint as needed

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    // Testing button state for mobile view
    // I want it to ease the menu in and out of view when clicked
    function buttonState() {
        // If mobile menu is open
        if (isOpen) {
            // If mobile view is also smaller than 768px (not Link tablet or big phone)
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
                        
                        className='flex items-center justify-center w-f text-white m-2 p-2 text-center' onClick={toggleOpen}>
                        {isOpen ? <Link className='flex items-center justify-center place-items-center p-2 m-4 hover:bg-black rounded-xl' href='#'>❌</Link> : null}
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
                        {isOpen ? <Link className='flex items-center justify-center place-items-center p-2 m-4 hover:bg-black rounded-xl' href='#'>❌</Link> : null}
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
                className='w-1/11 md:hidden
                dark:invert-20 rounded-xl m-1 items-center justify-center text-center'
                >
                <Link href="#" onClick={toggleOpen}>
                    <NavbarMenuButton
                        rows={3} 
                        columns={3}
                        lineColor='black'
                        lineHeight='2px'
                        lineWidth='10px'
                        containerSize='50px'
                        baseAngle={180}
                        className='w-1/11 md:hidden
                        dark:invert p-1'
                    />
                </Link> 
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