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
        I'm Justin Blechel, a Computer Science graduate from{" "}
          <a className="transition-none hover:transition-all"
            target="_blank"
            href="https://www.sonoma.edu/"
          >
          Sonoma State University
          </a>
          . I have hands-on experience in full stack web development and I'm currently looking for new opportunities in software engineering.
        </p>
      </div>
      
      <Technologies />
    </section>
  );
}
