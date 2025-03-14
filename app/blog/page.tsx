import BlogList from "./blog-list";
import { getBlogPosts, formatDate } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Justin Blechel's Blog",
};

export default function BlogPage() {
  const posts = getBlogPosts().map((post) => ({
    ...post,
    formattedDate: formatDate(post.metadata.publishedAt),
  }));

  return <BlogList posts={posts} />;
}
