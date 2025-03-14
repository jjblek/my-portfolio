"use client"
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "app/config";

const navItems = {
  "/": { name: "Home" },
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" }
};


export function Navbar() {

  return (
    <nav className="mb-6 lg:mb-12 py-5">
      <div className="flex flex-row items-center justify-between">
      <h1 className="text-3xl font-semibold tracking-tight">
        <Link href={"/"}>
          {metaData.title}
          </Link>
        </h1>
        <div className="flex flex-row gap-4 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="hover:transition-all hover:text-neutral-700 dark:hover:text-neutral-300 flex align-middle relative"
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
