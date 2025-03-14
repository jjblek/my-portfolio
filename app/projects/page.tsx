import type { Metadata } from "next";
import ProjectsList from "./projects-list"
import { Suspense } from 'react'
export const metadata: Metadata = {
  title: "Projects",
  description: "Justin Blechel's Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <Suspense>
        <ProjectsList/>
      </Suspense>
    </section>
  );
}
