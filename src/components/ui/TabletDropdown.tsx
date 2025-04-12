"use client";
import { motion } from "framer-motion";
import Links from "@/components/Landing/Links";
import Link from "next/link";

export default function TabletDropdown({ isOpen, toggleOpen }: {isOpen: boolean, toggleOpen: () => void}) {
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