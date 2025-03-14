import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ITEMS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const page = (await searchParams).page;
  
  const currentPage = Number(page) || 1;

  const allBlogs = getBlogPosts();
  const totalPages = Math.ceil(allBlogs.length / ITEMS_PER_PAGE);

  const paginatedPosts = allBlogs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blog</h1>
      <div className="overflow-y-auto h-[520px] sm:h-[420px] custom-scrollbar">
        {paginatedPosts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{post.metadata.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 text-sm">
          <Link
            href={`?page=${Math.max(currentPage - 1, 1)}`}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-neutral-200 dark:bg-neutral-800"
            }`}
            aria-disabled={currentPage === 1}
          >
            <MdNavigateBefore />
          </Link>
          <span className="text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <Link
            href={`?page=${Math.min(currentPage + 1, totalPages)}`}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-neutral-200 dark:bg-neutral-800"
            }`}
            aria-disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </Link>
        </div>
      )}
    </section>
  );
}
