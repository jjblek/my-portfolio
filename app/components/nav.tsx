"use client"
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch";
import { motion } from "motion/react"// Import motion from framer-motionamer-motion
import { metaData } from "app/config";
const navItems = {
  "/": { name: "Home" },
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" }
};


export function Navbar() {

  return (
    <nav className="mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
      <h1
              className="text-3xl font-semibold tracking-tight"
            >
              {metaData.title}
            </h1>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
