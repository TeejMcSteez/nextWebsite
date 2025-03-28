import NavBar from "@/components/Navbar";

export default function Page() {
    return (
        <>
        
        <NavBar/>

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
            <p className="mt-4">The blog post you are looking for does not exist.</p>
        </div>
        </>
    );
}