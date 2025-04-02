"use client";

import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    function buttonState() {
        if (isOpen) {
            return null;
        } else {
            return (
                <a href='#' className='dark:text-white text-black w-1/4 h-1/4 md:hidden'><img src='/assets/menu.svg' className='ml-auto w-1/2 h-1/2 sm:w-1/4 p-1 m-1 dark:bg-white dark:rounded-4xl' onClick={toggleOpen}/></a>
            );
        }
    }

    return (
        <>
        <header className='flex justify-between bg-neutral-100 dark:bg-zinc-900 p-2'>
            <h1 className='m-5 text-2xl text-start items-start'>Tommy Halls Portfolio</h1>

            <nav className='hidden md:block m-5 text-white'>
                <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
                <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">About</a>
                <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
                <a href="/blog" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Blog</a>
                <a href="/projects" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Projects</a>

            </nav>

            {buttonState()}

        </header>
        <div>
            {isOpen && (
                <div className='flex flex-col justify-end text-center'>
                    <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 text-white">Home</a>
                    <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 text-white">About</a>
                    <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 text-white">Contact</a>
                    <a href="/blog" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 text-white">Blog</a>
                    <a href="/projects" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 text-white">Projects</a>

                    <button className='text-white m-2 p-2' onClick={toggleOpen}>
                        {isOpen ? <a className='hover:bg-black hover:animate-pulse p-2 rounded text-xl' href='#'>❌</a> : null}
                    </button>
                </div>
            )}
        </div>
        </>
    );
}