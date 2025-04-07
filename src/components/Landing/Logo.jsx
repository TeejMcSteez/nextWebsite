import Typewriter from "@/components/About/Typewriter";

// Basic typewriter effect for the logo text
export default function Logo() {
    const text = "Tommy Hall's Portfolio";
    const speed = 60;

    return (
        <div className="flex text-2xl bold m-1 p-2">
            <Typewriter text={text} speed={speed} />
        </div>
    );
}