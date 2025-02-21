"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { HiMiniHome } from "react-icons/hi2";
import { motion } from "motion/react"// Import motion from framer-motionamer-motion

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
};

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.8 }, // Start small and invisible
  animate: { opacity: 1, scale: 1.1 }, // Scale up slightly and fade in
  exit: { opacity: 0, scale: 0.8 }, // Scale down slightly and fade out
};

export function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const isHomePage = pathname === "/"; // Check if on the homepage

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center min-h-10">
          {isHomePage ? (
            <motion.h1
              className="text-3xl font-semibold tracking-tight"
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }} // Duration of the animation
            >
              {metaData.title}
            </motion.h1>
          ) : (
            <Link href="/" className="flex items-center">
              <motion.div
                className="text-3xl font-semibold tracking-tight"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }} // Duration of the animation
              >
                <HiMiniHome className="hover:text-neutral-800 dark:hover:text-neutral-200"/>
              </motion.div>
            </Link>
          )}
        </div>
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
