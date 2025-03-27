export default function NavBar() {
    return (
        <>
        <header className='flex justify-between bg-neutral-100 dark:bg-zinc-900 p-2'>
            <h1 className='m-5'>Tommy Halls Portfolio</h1>
            <nav className='m-5 text-white'>
                <a href="/" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
                <a href="/about" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">About</a>
                <a href="/contact" className="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
            </nav>
        </header>
        </>
    );
}