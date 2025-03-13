import Image from "next/image";
import { socialLinks } from "./config";
import Technologies from "./components/home/technologies";
export default function Page() {
  return (
    <section>
      <div className="relative flex items-center justify-between mb-8">
      <h1 className="text-2xl font-medium tracking-tight">
        About
      </h1>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 grayscale hover:grayscale-0 absolute right-0 top-0"
          unoptimized
          width={48}
          height={48}
          priority
        />
      </a>
      </div>
      
      
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p>
        I'm Justin Blechel, a software engineer based in Santa Rosa, California. I have a B.S. in Computer Science from{" "}
          <a
            target="_blank"
            href="https://www.sonoma.edu/"
          >
          Sonoma State University
          </a>
          . 
        </p>
      </div>
      <Technologies />
    </section>
  );
}
