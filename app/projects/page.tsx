import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import ProjectsList from "../components/projects-list"
export const metadata: Metadata = {
  title: "Projects",
  description: "Justin Blechel's Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <ProjectsList/>
    </section>
  );
}
