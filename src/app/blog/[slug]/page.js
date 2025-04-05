import BlogPostFetcher from "@/components/Blog/BlogPostFetcher";
import ClientBlogLayout from "@/components/Blog/ClientBlogLayout";

export default async function Page({ params }) {
    const { slug } = await params; // Next yells at you if you don't destructure this from params
    return (
        <>
        <ClientBlogLayout>
            <BlogPostFetcher slug={slug} />
        </ClientBlogLayout>
        </>
    );
}