import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                        <Link href="https://github.com/TeejMcSteez" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white invert dark:invert-0 transition-colors hover:scale-125">
                            <Image height={25} width={25} 
                                src={"/assets/github-mark-white.svg"} 
                                alt="GitHub Logo"
                            />
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors dark:invert hover:scale-125">
                            <Image height={25} width={25}
                                src={"/assets/contact.svg"}
                                alt="Contact Logo"
                            />
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors dark:invert hover:scale-125">
                            <Image height={25} width={25}
                                src={"/assets/blog.svg"}
                                alt="Blog Logo"
                            />
                        </Link>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p>Built with <Link href={"https://nextjs.org/"} className="hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">Next.js</Link> • Hosted on <Link href="https://vercel.com" className="underline hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">Vercel</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}