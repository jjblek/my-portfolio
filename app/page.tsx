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

        <div className="mr-6">
        <DownloadResume/>
        </div>
        
        
        <a href={socialLinks.linkedin} target="_blank" className="absolute right-4 bottom-0 circle">
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            className=" bg-gray-100 grayscale hover:grayscale-0"
            unoptimized
            width={64}
            height={64}
            priority
          />
        </a>
        
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
        <p>I love building minimalistic, highly performant web apps. I'm currently volunteering at ClimateForge.ai as a frontend developer.</p>
      </div>
      
      <Technologies />
    </section>
  );
}
