import Landing from "@/components/Landing";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
