import Blog from "@/components/pages/Blog/Blog";
import React from "react";
import { fetchBlogPosts } from "@/lib/blogs";
import { BLOG_OG_IMAGE, getCombinedMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const posts = await fetchBlogPosts();
  const featuredImage = posts[0]?.heroImage || posts[0]?.image || BLOG_OG_IMAGE;

  return await getCombinedMetadata("/blog", {
    title: "Travel Blog",
    description:
      "Read destination guides, travel inspiration, honeymoon ideas, and member-focused stories from Own Holiday Club.",
    image: featuredImage,
  });
}

function Page() {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default Page;
