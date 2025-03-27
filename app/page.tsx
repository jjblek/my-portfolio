import Image from "next/image";
import { socialLinks } from "./config";
import Technologies from "./components/home/technologies";
import DownloadResume from "./components/download-resume";
export default function Page() {
  return (
    <section>
      <div className="relative flex items-center justify-between">
        
        <h1 className="text-2xl font-medium tracking-tight">
          About
        </h1>

        <DownloadResume/>
      </div>
      
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p>
        I'm Justin Blechel, a software engineer based in Santa Rosa, California. I have a B.S. in Computer Science from{" "}
          <a className="transition-none hover:transition-all"
            target="_blank"
            href="https://www.sonoma.edu/"
          >
          Sonoma State University
          </a>
          .
        </p>
        <p>I specialize in building sleek, high-performance web applications. Let's connect and create something amazing!</p>
      </div>
      
      <Technologies />
    </section>
  );
}
