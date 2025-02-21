import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Hi, I'm Justin Blechel, a software engineer with a B.S. in Computer Science from{" "}
          <a
            target="_blank"
            href="https://www.sonoma.edu/"
          >
          Sonoma State University
          </a>
          .
        </p>
        <p>
          I have a strong foundation in C++ and a deep understanding of programming languages and concepts. 
          My expertise lies in building responsive and high-performance web applications using Next.js and React. 
          On the backend, I develop scalable solutions using a variety of technologies, ensuring efficient data management and seamless integrations.</p>
        <p>
          I'm experienced in version control and collaboration using GitHub and continuously explore new technologies to enhance performance and user experience.
        </p>
        <p>
          I'm always looking for new challenges—let's connect and build something great together!
        </p>

        
      </div>
    </section>
  );
}
