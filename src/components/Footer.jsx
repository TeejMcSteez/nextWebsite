export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-6">
                        <a href="https://github.com/TeejMcSteez" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Github
                        </a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Contact
                        </a>
                        <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                            Blog
                        </a>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p>Built with Next.js • Hosted on <a href="https://vercel.com" className="underline hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">Vercel</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}