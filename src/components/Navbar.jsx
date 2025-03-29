"use client";
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <header className='flex justify-between bg-neutral-100 dark:bg-zinc-900 p-2'>
            <h1 className='m-5 text-2xl'>Tommy Halls Portfolio</h1>

            <nav className='hidden md:block m-5 text-white'>
                <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
                <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">About</a>
                <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
                <a href="/blog" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Blog</a>
                <a href="/projects" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Projects</a>

            </nav>

            <button className='md:hidden text-white m-2 p-2 rounded-xl dark:bg-zinc-900' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <a className='animate-pulse hover:animate-ping'>↙️</a> : <a className='bg-black p-2 rounded hover:animate-pulse'>MENU ☰</a>}
            </button>

        </header>
        <div>
            {isOpen && (
                <div className='flex flex-col justify-end text-center'>
                    <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
                    <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">About</a>
                    <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
                    <a href="/blog" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Blog</a>
                    <a href="/projects" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Projects</a>

                    <button className='text-white m-2 p-2' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <a className='hover:bg-black hover:animate-pulse p-2 rounded text-2xl'>❌</a> : ""}
                    </button>
                </div>
            )}
        </div>
        </>
    );
}