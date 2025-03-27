export default function NavBar() {
    return (
        <>
        <header className='flex justify-between'>
            <h1 className='m-5'>Tommy Halls Portfolio</h1>
            <nav className='m-5'>
                <a href="/contact" class="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Contact</a>
                <a href="/" class="m-2 px-3 py-2 bg-red-600 rounded hover:bg-red-800">Home</a>
            </nav>
        </header>
        </>
    );
}