import ClientBlogLayout from "@/components/Blog/ClientBlogLayout";
import BlogFetcher from "@/components/Blog/BlogFetcher";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

export default async function BlogPage() {
    return (
        <Suspense fallback={<Loading />}>
            <ClientBlogLayout>
                <BlogFetcher />
            </ClientBlogLayout>
        </Suspense>
    );
}