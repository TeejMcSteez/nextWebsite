export default function Footer() {
    return (
        <>
        <footer className="bg-rose-500 py-2 bottom-0 w-full">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <div id="footer" className="dark:bg-zinc-900 bg-neutral-100 p-4 rounded-xl shadow-lg">
                    <p className="text-xl">Thank you for visiting my website!</p>
                    <p className="text-xl">Check out my contact page for more information or read my blog.</p>
                </div>
                <div className="mt-4 text-xs">
                    <p>
                    Hosted on <a href="https://vercel.com/" className="underline" target="_blank">Vercel</a> |
                    Domain by <a href="https://namecheap.com/" className="underline" target="_blank">NameCheap</a>
                    </p>
                    <p>
                    <a href="https://github.com/TeejMcSteez/nextWebsite" className="underline" target="_blank">View on Github</a>
                    </p>
                </div>
            </div>
        </footer>
        </>
    );
}