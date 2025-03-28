import ClientBlogLayout from "@/components/ClientBlogLayout";
import BlogFetcher from "@/components/BlogFetcher";

export default async function BlogPage() {
    return (
        <ClientBlogLayout>
            <BlogFetcher />
        </ClientBlogLayout>
    );
}