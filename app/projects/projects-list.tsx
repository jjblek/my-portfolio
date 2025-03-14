"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { projects } from "app/projects/project-data";
import { MdClose, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const ITEMS_PER_PAGE = 5; // Adjust number of projects per page

export default function ProjectsList() {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag");

  const [selectedTags, setSelectedTags] = useState<string[]>(initialTag ? [initialTag] : []);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to toggle a tag in the filter
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) => {
      const newTags = prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag];
      setCurrentPage(1); // Reset to first page when filtering
      return newTags;
    });
  };

  // Function to determine if a project should be included
  const matchesSelectedTags = (project: any) => {
    if (selectedTags.length === 0) return true;
    
    return selectedTags.every(tag =>
      project.tags.includes(tag) || project.hiddenTags?.includes(tag) // Check both visible and hidden tags
    );
  };

  // Filter projects based on selected tags
  const filteredProjects = projects.filter(matchesSelectedTags);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      {/* Selected Tags Display */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className="px-2 py-1 text-xs rounded-md bg-red-500 text-white flex items-center gap-1"
            >
              {tag} <MdClose />
            </button>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div className="overflow-y-auto h-[520px] sm:h-[420px] custom-scrollbar">
        {paginatedProjects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-2 mb-5 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 group-hover:opacity-80 transition-opacity">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={(e) => {
                    e.preventDefault(); // Prevents link navigation
                    toggleTag(tag);
                  }}
                  className={`px-2 py-1 text-xs rounded-md ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
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
