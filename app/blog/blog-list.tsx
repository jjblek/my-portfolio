"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "app/lib/posts";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ITEMS_PER_PAGE = 5; // Adjust for the number of blogs per page

export default function BlogList({ blogs }: { blogs: any[] }) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    const paginatedBlogs = blogs.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div>
            {/* Blog List */}
            <div className="overflow-y-auto h-[520px] sm:h-[420px] custom-scrollbar">
                {paginatedBlogs.map((post) => (
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
                    href={`/blog/${post.slug}`}
                >
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                    <h2 className="text-black dark:text-white">{post.metadata.title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                        {formatDate(post.metadata.publishedAt, false)}
                    </p>
                    </div>
                </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-4 text-sm">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-neutral-200 dark:bg-neutral-800 disabled:opacity-50"
                >
                    <MdNavigateBefore />
                </button>
                <span className="text-gray-700 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-neutral-200 dark:bg-neutral-800 disabled:opacity-50"
                >
                    <MdNavigateNext />
                </button>
                </div>
            )}
        </div>
    );
}
