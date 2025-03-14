"use client";

import { useState } from "react";
import Link from "next/link";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ITEMS_PER_PAGE = 5; // Adjust number of blogs per page

export default function BlogList({ posts }) {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination logic
    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
    const paginatedBlogs = posts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Blog</h1>

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
                    {post.formattedDate}
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
                className="px-4 py-2 rounded-md bg-neutral-200 enabled:hover:bg-neutral-300 dark:bg-neutral-800 dark:enabled:hover:bg-neutral-700 disabled:opacity-50"
            >
                <MdNavigateBefore />
            </button>
            <span className="text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-neutral-200 enabled:hover:bg-neutral-300 dark:bg-neutral-800 dark:enabled:hover:bg-neutral-700 disabled:opacity-50"
            >
                <MdNavigateNext />
            </button>
            </div>
        )}
        </div>
    );
}
