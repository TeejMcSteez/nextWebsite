import Landing from "./ui/Landing";
import NavBar from "./ui/Navbar";
import Typewriter from "./ui/Typewriter";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex flex-grow items-center justify-center">
          <Landing />
        </main>
        <Footer />
      </div>
    </>
  );
}
