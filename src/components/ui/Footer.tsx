import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                        <Link href="https://github.com/TeejMcSteez" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Github
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Contact
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Blog
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