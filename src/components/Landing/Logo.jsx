import Typewriter from "@/components/About/Typewriter";

// Basic typewriter effect for the logo text
// Still don't know if I like this or not
// I might just go with a simple text logo instead
export default function Logo() {
    const text = "Tommy Hall's Portfolio";
    const speed = 10;

    return (
        <div className="flex text-2xl bold m-1 p-2">
            <Typewriter text={text} speed={speed} />
        </div>
    );
}