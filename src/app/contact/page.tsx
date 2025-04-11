"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Contact() {
    return (
        <motion.div className="min-w-screen min-h-screen dark:bg-black flex flex-col items-center justify-center place-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <div id="button-section" className="flex flex-col p-1 border-t-4 border-l-4 border-red-800">
                <Link id ="button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://snapchat.com/t/J3xsUqHK" target="_blank">Snapchat</Link>
                <Link id = "button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://twitter.com/Tj_Hall04" target="_blank">X</Link>
                <Link id = "button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://www.instagram.com/tj_hall04/" target="_blank">Instagram</Link>
                <Link id = "button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://github.com/TeejMcSteez" target="_blank">GitHub</Link>
                <Link id = "button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://www.threads.net/@tj_hall04" target="_blank">Threads</Link>
                <Link id="button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://www.linkedin.com/in/tommyhall047/" target="_blank">LinkedIn</Link>
                <Link id="button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="https://profile.indeed.com/p/tommyh-m1cgdb4" target="_blank">Indeed</Link>
                <Link id="button" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="/blog">Blog</Link>

                <Link id = "backbutton" className="w-24 text-center bg-zinc-900 hover:bg-red-600 hover:animate-pulse p-2 m-2 rounded-xl text-white" href="/"><button>Back</button></Link>
            </div>
        </motion.div>
    );
}