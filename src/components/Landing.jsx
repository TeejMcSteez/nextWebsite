"use client";

import Skills from "./Skills";

export default function Landing() {

    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className='flex flex-col text-center dark:bg-zinc-900 bg-neutral-100 rounded-xl shadow-lg p-10 m-4'>
                <h2 className="text-xl font-medium mb-2">Hello, I'm Tommy Hall!</h2>
                <br />
                <p className="text-xl font-medium mb-2">Student at UNCC.</p>
                <br />
                <p className="text-xl font-medium mb-2">Check Out My Contact Page Or About Me!</p>
                <footer>F Through Technologies Below and Click On One To See a Project!</footer>
            </div>
        </div>
        </>
    );
}
