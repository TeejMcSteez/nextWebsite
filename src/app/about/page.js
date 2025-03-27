import Typewriter from "../ui/Typewriter";
import NavBar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function About() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex flex-col flex-grow place-items-center overflow-scroll">
                <Typewriter text={"About Me"} speed={100}/>
                <Typewriter text={"I am passionate about web development and security, while in school I have mainly stuck with web development to learn how to program and how computers work in general I aim to learn more about cybersecurity."} speed={7}/>
                <Typewriter text={"Aside from my time programming and in school I enjoy working with hardware to such as building computers (up to 6 now) as well as playing with microcontrollers like the ESP32. I also enjoy 3D printing parts and useful little things like a Xbox controller holder."} speed={7}/>
                <Typewriter text={"When i'm not on the computer me and my partner enjoy travelling to the mountains or the beach with our dog and spending time outside."} speed={7}/>
                <Typewriter text={"Thats me! Check out my blog for a cool story on how I made the blog system work on my website!"} speed={7}/>
            </main>
            <Footer />
        </div>
        </>
    );
}