import Link from "next/link";
export default function Links() {
    return (
    <>
        <Link href="/" className="w-full m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 scale-95 motion-safe:hover:scale-115">Home</Link>
        <Link href="/about" className="w-full m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 scale-95 motion-safe:hover:scale-115">About</Link>
        <Link href="/blog" className="w-full m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 scale-95 motion-safe:hover:scale-115">Blog</Link>
        <Link href="/projects" className="w-full m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 scale-95 motion-safe:hover:scale-115">Projects</Link>
        <Link href="/contact" className="w-full m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800 scale-95 motion-safe:hover:scale-115">Contact</Link>
    </>
    );
}