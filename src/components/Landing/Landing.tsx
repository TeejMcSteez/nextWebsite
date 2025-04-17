"use client";


export default function Landing() {

    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col text-center dark:bg-zinc-900 bg-neutral-100 rounded-xl shadow-lg p-10 m-4">
                <h2 className="text-xl font-medium mb-2">Hello, My Name is Tommy Hall!</h2>
                <br />
                <p className="text-xl font-medium mb-2">Student at UNCC.</p>
                <br />
                <p className="text-xl font-medium mb-2">Check Out My Contact Page Or About Me!</p>
                <footer className="flex flex-col md:flex-row">
                    <p className="bold italic animate-pulse mr-2">Click F</p>
                    <p>Through Technologies Below And Click On One To See A Project!</p>
                </footer>
            </div>
        </div>
        </>
    );
}
