import Image from "next/image";
import { socialLinks } from "./config";
import Technologies from "./components/home/technologies";
export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 mt-5 float-right ml-[8px] grayscale hover:grayscale-0"
          unoptimized
          width={100}
          height={100}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About
      </h1>
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
