import NavBar from "../ui/Navbar";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";

export default function BlogPage() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex flex-col flex-grow">
                <Blog />
            </main>
            <Footer />
        </div>
        </>
    );
}