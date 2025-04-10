import ClientBlogLayout from "@/components/Blog/ClientBlogLayout";
import BlogFetcher from "@/components/Blog/BlogFetcher";

export default async function BlogPage() {
    return (
        <ClientBlogLayout>
            <BlogFetcher />
        </ClientBlogLayout>
    );
}