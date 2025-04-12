import BlogPostFetcher from "@/components/Blog/BlogPostFetcher";
import ClientBlogLayout from "@/components/Blog/ClientBlogLayout";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

interface PageParams {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Page({ params }: PageParams) {
    const { slug } = await params; // Next yells at you if you don't destructure this from params
    return (
        <Suspense fallback={<Loading />}>
            <ClientBlogLayout>
                <BlogPostFetcher slug={slug} />
            </ClientBlogLayout>
        </Suspense>
    );
}