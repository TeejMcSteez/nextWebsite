import BlogPostFetcher from "@/components/Blog/BlogPostFetcher";
import ClientBlogLayout from "@/components/Blog/ClientBlogLayout";

interface PageParams {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Page({ params }: PageParams) {
    const { slug } = await params; // Next yells at you if you don't destructure this from params
    return (
        <>
        <ClientBlogLayout>
            <BlogPostFetcher slug={slug} />
        </ClientBlogLayout>
        </>
    );
}