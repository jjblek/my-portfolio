"use client"; // Client-side filtering

import { useState } from "react";
import Link from "next/link";
import { projects } from "app/projects/project-data";

export default function ProjectsList() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Function to toggle a tag in the filter
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) => selectedTags.every((tag) => project.tags.includes(tag)))
      : projects;

  return (
    <div>
      {/* Selected Tags Display */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white flex items-center gap-1"
            >
              {tag} ✕
            </button>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div className="overflow-y-auto max-h-[450px] pr-5 custom-scrollbar">
        {filteredProjects.map((project, index) => (
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
    </div>
  );
}
